import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';
import { Table, Button, Icon, Modal, message } from 'antd';
import axios from 'axios';
import config from '../utils/config';
import CandidateForm from './candidates/CandidateForm';
import withAnalytics from './analytics/withAnalytics';
import requireLogin from './login/requireLogin';

class Dashboard extends Component {
  state = {
    data: [],
    edit: {
      showForm: false,
      candidate: null,
      view: false
    }
  };
  columns = [
    {
      title: 'Full Name',
      width: 250,
      dataIndex: 'fullName',
      key: 'name'
    },
    {
      title: 'City',
      dataIndex: 'cityOfResidence',
      key: 'city'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Phone',
      dataIndex: 'contactNumber',
      key: 'phone'
    },
    {
      title: 'Experience',
      dataIndex: 'yearsOfExperience',
      key: 'experience'
    },
    {
      title: 'Action',
      dataIndex: '',
      render: (text, record) => {
        return (
          <React.Fragment>
            <Button
              type="circle"
              title="View"
              onClick={() => this.view(record)}
            >
              <Icon type="file-text" style={{ color: '#ff8806' }} />
            </Button>
            <Button
              type="circle"
              title="Edit"
              onClick={() => this.edit(record)}
            >
              <Icon type="edit" style={{ color: 'green' }} />
            </Button>
            <Button
              type="circle"
              title="Delete"
              onClick={() => this.delete(record)}
            >
              <Icon type="delete" style={{ color: 'red' }} />
            </Button>
          </React.Fragment>
        );
      }
    }
  ];
  componentDidMount() {
    this.fetchCandidates();
  }
  fetchCandidates = async () => {
    const res = await axios.get(`${config.API_URL}/api/candidates`);
    if (res.status === 200) {
      this.setState({
        data: res.data
      });
    }
  };

  edit = candidate => {
    this.setState({
      edit: {
        candidate,
        showForm: true,
        view: false
      }
    });
  };
  view = candidate => {
    this.setState({
      edit: {
        candidate,
        showForm: true,
        view: true
      }
    });
  };
  delete = async record => {
    const res = await axios.delete(
      `${config.API_URL}/api/candidates/${record._id}`
    );
    if (res.status === 200) {
      this.props.logEvent({
        category: 'Candidate',
        action: 'Delete'
      });
      message.success('Deleted Successfully');
      this.fetchCandidates();
    }
  };

  onCancel = () => {
    this.setState(prevState => {
      return {
        edit: {
          ...prevState.edit,
          showForm: null
        }
      };
    });
  };

  editCandidate = async (id, data) => {
    const payload = { ...data, id };
    const res = await axios.put(`${config.API_URL}/api/candidates`, payload);
    if (res.status === 200) {
      this.props.logEvent({
        category: 'Candidate',
        action: 'Update',
        label: 'Updated candidate details',
        value: res.data._id
      });
      message.success('Updated Successfully');
      this.fetchCandidates();
      this.onCancel();
      return true;
    }
    return false;
  };

  render() {
    return (
      <div class="pg-dashboard-container">
        <div className="table-title">
          <h2 className="">CANDIDATES</h2>
          <Link className="btn-link" to="/">
            <Button type="primary">BACK</Button>
          </Link>
        </div>
        <Table
          className="table"
          columns={this.columns}
          dataSource={this.state.data}
          scroll={{ y: 550 }}
        />
        <Modal
          className="edit-modal"
          title="Candidate Information"
          visible={this.state.edit.showForm}
          onCancel={this.onCancel}
        >
          <CandidateForm
            candidate={this.state.edit.candidate}
            editCandidate={this.editCandidate}
            viewMode={this.state.edit.view}
          />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  isLoggedIn: auth.isLoggedIn
});

export default connect(
  mapStateToProps,
  actions
)(requireLogin(withAnalytics(Dashboard)));

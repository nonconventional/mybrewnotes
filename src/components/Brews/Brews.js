import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import MUIDataTable from 'mui-datatables';

class Brews extends Component {
  onRowClick = (rowData, { rowIndex }) => {
    const { history } = this.props;

    history.push(`/brews/${rowIndex}`);
  };

  render() {
    const { brews } = this.props;
    const columns = [
      {
        name: 'Name',
        options: {
          filter: true,
          sort: true,
        },
      },
    ];

    const options = {
      pagination: false,
      print: false,
      download: false,
      onRowClick: this.onRowClick,
    };

    const data = brews.reduce((newData, brew) => {
      return [...newData, [brew.name]];
    }, []);

    return <MUIDataTable columns={columns} data={data} options={options} />;
  }
}

Brews.propTypes = {
  brews: PropTypes.arrayOf(PropTypes.object),
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    brews: state.brews,
  };
}

export default withRouter(connect(mapStateToProps)(Brews));

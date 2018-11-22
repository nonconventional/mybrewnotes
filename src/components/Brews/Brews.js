import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import MUIDataTable from 'mui-datatables';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import { brewActionCreators } from '../../actions';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class Brews extends Component {
  componentDidMount() {
    const { brews, getAllBrews } = this.props;
    if (brews.length === 0) {
      getAllBrews();
    }
  }

  onRowClick = (rowData, { rowIndex }) => {
    const { history } = this.props;

    history.push(`/brews/${rowIndex}`);
  };

  render() {
    const { user, brews, classes } = this.props;
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

    return (
      <>
        <MUIDataTable columns={columns} data={data} options={options} />
        {user && (
          <Button
            variant="fab"
            color="primary"
            component={Link}
            aria-label="Add"
            className={classes.button}
            to="/brews/create"
          >
            <AddIcon />
          </Button>
        )}
      </>
    );
  }
}

Brews.propTypes = {
  brews: PropTypes.arrayOf(PropTypes.object),
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  user: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    brews: state.brews,
    user: state.user,
  };
}

const mapDispatchToProps = {
  getAllBrews: brewActionCreators.getAll,
};

export default withRouter(
  withStyles(styles)(
    connect(
      mapStateToProps,
      mapDispatchToProps,
    )(Brews),
  ),
);

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import { withRouter } from 'react-router';
// import APP from '../../App';
import Today from '../components/Today';
import TestCom from '../components/TestCom';
import TodoListBottomNavigation from '../components/TodoListBottomNavigation';

function mapStateToProps(state) {
  return {
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

/*connect*/
export const TodoListBottomNavigationContainer =connect(mapStateToProps, mapDispatchToProps)(TodoListBottomNavigation);
export const TodayContainer =connect(mapStateToProps, mapDispatchToProps)(Today);
export const TestComContainer =connect(mapStateToProps, mapDispatchToProps)(TestCom);
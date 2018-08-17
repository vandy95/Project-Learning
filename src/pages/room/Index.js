import React from "react";
import {Link} from "react-router-dom";
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

import {NotificationContainer} from 'react-notifications';
import RoomStore from "../../stores/RoomStore";
import * as RoomActions from "../../actions/RoomActions";

const CHANGE_EVENT = 'change';

export default class Index extends React.Component {
  constructor() {
    super();
    this.getItems = this.getItems.bind(this);
    this.state = {
      id: "",
      items: RoomStore.getAll()
    };
  }

  componentWillMount() {
    RoomActions.reloadItemsAsync();
    RoomStore.on(CHANGE_EVENT, this.getItems);
  }

  componentWillUnmount() {
    RoomStore.removeListener(CHANGE_EVENT, this.getItems);
  }


  getItems() {
    console.log("getItems");
    this.setState({items: RoomStore.getAll()});
  }

  render() {

    // const { items } = this.state;
    console.log("Rendering...");
    console.log("Items in State", this.state.items);

    return (
      <div className="content-wrapper">
        <section className="content-header">
          <Link to="/contact/store" className="btn btn-primary pull-right">Add New</Link>
          <ol className="breadcrumb">
            <li>
              <Link to="/">
                <i className="fa fa-home"></i>Home</Link>
            </li>
            <li className="active">Rooms</li>
          </ol>
        </section>


        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box box-primary">
                <div className="box-header">
                  <h3 className="box-title">List of rooms</h3>
                </div>
                <div className="box-body">
                  <div>
                    <ReactTable data={this.state.items} columns={[
                        {
                          Header: "No",
                          id: "row",
                          filterable: false,
                          maxWidth: 50,
                          className: "row-center",
                          Cell: (row) => { return <div>{row.index+1}</div>;}
                        },
                        {
                          Header: 'Name',
                          accessor: 'name',
                        },
                        {
                          Header: 'Description',
                          accessor: 'description'
                        }
                        // {
                        //   filterable: false,
                        //   sortable: false,
                        //   width: 70,
                        //   accessor: '_id',
                        //   Cell: props => <Link to={'/contact/view/'+props.value} className="btn btn-block btn-info btn-sm">View</Link>
                        // },
                        // {
                        //   filterable: false,
                        //   sortable: false,
                        //   width: 70,
                        //   accessor: '_id',
                        //   Cell: props => <Link to={'/contact/update/'+props.value} className="btn btn-block btn-primary btn-sm">Edit</Link>
                        // },
                        // {
                        //   filterable: false,
                        //   sortable: false,
                        //   width: 70,
                        //   accessor: '_id',
                        //   Cell: props => <button onClick={() => this.showConfirmDelete(props.value)} ref="myModal" className="btn btn-block btn-danger btn-sm" data-toggle="modal" data-target="#modal-danger">Delete</button>
                        // }
                      ]} defaultPageSize={10} filterable={true} className="-striped -highlight"/>
                    <br/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* delete model */}
          {/* <div className="modal modal-danger fade" id="modal-danger">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span></button>
                  <h4 className="modal-title">Confirm</h4>
                </div>
                <div className="modal-body">
                  <p>Are you sure, want to delete this record?</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline pull-left" data-dismiss="modal">Close</button>
                  <button onClick={this.handleDelete.bind(this)} type="button" className="btn btn-outline" data-dismiss="modal">Delete</button>
                </div>
              </div>
            </div>
          </div> */}

          {/* end delete model */}
          <NotificationContainer/>
        </section>
      </div>
    );
  }
}

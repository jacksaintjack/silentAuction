import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

import setup from './../../setup'
import User from './../../models/users'

class ListItems extends React.Component {
  constructor(props) {
    super(props)
    setup(User.access_token)
    this.state = {
      loaded: false,
      item: [],
      itemBids: {bids: []}
    }
    this.fetchItems = this.fetchItems.bind(this);
  }

  fetchItems(nextId) {
    nextId = nextId || this.props.id
    $.ajax('http://silent-auctioner.herokuapp.com/auctions/'+ nextId + '/items') //used this.props.id to get the id. the this.props.params.id is on dashboarditemview
     .then( (response) => {
        this.setState({
         loaded: true,
         item: response,
         itemBids: response
        })
     });
  }

  componentWillReceiveProps(nextProps){
    this.fetchItems(nextProps.id);
  }

  componentDidMount(hello) {
    this.fetchItems(this.props.id);
    this.interval = setInterval( () => {
      this.fetchItems(this.fetchItems(this.props.id))
    }, 5000);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render() {
    //For individual auction information
    let items = this.state.item.map(item => {
      console.log(item)
      return <div key= {item.id} item={item}>
              <Link to={`/auctions/${this.props.id}/items/${item.id}`}>
                <img  src={item.image_url}/>
                <h2>{item.name}</h2>
              </Link>
              <h3>Description</h3>{item.description}
              <h3>Starting Bid</h3>{item.starting_bid}
              <h3>Current Highest Bid</h3> {item.current_bid}
            </div>
      });

    return(
      <section className='itemList'>
        {items}
      </section>
    )
  }
}

export default ListItems;
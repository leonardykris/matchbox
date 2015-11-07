// Beer component: represents a single beer item
Beer = React.createClass({
  propTypes: {
    // This component gets the task to display through React prop.
    // We can use propTypes to indicate it is required
    beer: React.PropTypes.object.isRequired
  },
  sAlertWarning() {
    sAlert.warning('This is a warning', { effect: 'slide'});
  },
  sAlertError() {
    sAlert.error('This is a warning', { effect: 'slide'});
  },
  render() {
    return (
      <div className="col-xs-4 beer-outer">
        <div className="beer" onClick={this.sAlertError}>
          <img src={this.props.beer.url} />
          <span>{this.props.beer.name}</span>
        </div>
      </div>
    );
  }
});
App = React.createClass({
  sAlertSuccess() {
    sAlert.success('This is a warning', { effect: 'slide'});
  },
  getBeers() {
    return [
      { _id: 1, name: 'Budweiser', url: 'assets/beers/budweiser.png' },
      { _id: 2, name: "Beck's", url: 'assets/beers/becks.png' },
      { _id: 3, name: 'Hoegaarden', url: 'assets/beers/hoegaarden.png' },
      { _id: 4, name: 'Leffe', url: 'assets/beers/leffe.png' },
      { _id: 5, name: 'Stella', url: 'assets/beers/stella_artois.png' },
      { _id: 6, name: 'Corona', url: 'assets/beers/corona_extra.png' }
    ];
  },
  renderBeers() {
    return this.getBeers().map((beer) => {
      return <Beer key={beer._id} beer={beer} />;
    });
  },
  render() {
    return (
      <div>
        <div className="container-fluid beers">
          <div className="hero">
            <div className="hero-text">
              <img src="assets/select_beer.svg" />
            </div>
          </div>
        </div>
        <div className="container beers-selection">
          {this.renderBeers()}
        </div>
      </div>
    );
  }
});
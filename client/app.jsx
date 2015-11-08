const {
    Router,
    Route,
    IndexRoute,
    Link,
    history
  } = ReactRouter;

const browserHistory = history.createHistory();

// A basic app container where views will be rendered in
App = React.createClass({
  getInitialState() {
    return {
      // Anything here
    };
  },
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

// The view to be displayed as the index view
Index = React.createClass({
  getInitialState() {
    return {
      // Anything here
    };
  },
  render() {
    return (
      <div>
        <div className="choose-age">
          <div className="container-fluid ">
            <div className="hero">
              <div className="hero-text">
                <img src="../assets/masthead.svg" />
              </div>
            </div>
          </div>
          <div className="container age-input-outer">
            <div className="hero">
              <div className="hero-text">
                <h3>How old are you?</h3>
                <span>Enter your birth date.</span>
                <div className="age-input">
                  <input type="number" className="form-control input-lg day" name="birth_day" min={0} max={31} placeholder="DD"/>
                  <input type="number" className="form-control input-lg month" name="birth_day" min={0} max={31} placeholder="MM"/>
                  <input type="number" className="form-control input-lg year" name="birth_day" min={0} max={31} placeholder="YYYY"/>
                </div>
              </div>
            </div>
          </div>
          <div className="container next-button-fixed">
            <div className="legal">
              <input type="checkbox" name="i_am_legal"/> You must be of legal age to enter this site
            </div>
            <Link to="/selection">
              <button className="btn btn-primary btn-block btn-lg">ENTER</button>
            </Link>
            <span>Enjoy Responsibly</span>
          </div>
        </div>
      </div>
    );
  }
});

// A view for the route
How = React.createClass({
  render() {
    return (
      <div>
        <div className="howto">
          <div className="container-fluid">
            <div className="hero">
              <div className="hero-text">
                <img src="../assets/howto.svg" />
              </div>
            </div>
          </div>
          <div className="container">
            <ol>
              <li>Pick your beer and discover the best food matches.</li>
              <li>Start a game with up to 4 friends or strangers.</li>
              <li>Use your wit and choose your best 2 words to finish the sentence.</li>
              <li>Take turns to judge the most clever combinations. Player with the most points win!</li>
            </ol>
            <div className="shortdiv">&nbsp;</div>
            <p>Bonus points are rewarded when you win using your coloured words.</p>
            <p>Look out for the bonus round to earn extra points!</p>
          </div>
          <div className="container">
            <button className="btn btn-primary btn-block btn-lg">Play Now</button>
          </div>
        </div>
      </div>
    );
  }
});

// Beer component: represents a single beer item
Beer = React.createClass({
  propTypes: {
    // This component gets the task to display through React prop.
    // We can use propTypes to indicate it is required
    beer: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <div className="col-xs-4 beer-outer">
        <Link to="/detail">
          <div className="beer">
            <img src={this.props.beer.url} />
            <span>{this.props.beer.name}</span>
          </div>
        </Link>
      </div>
    );
  }
});

Selection = React.createClass({
  getBeers() {
    return [
      { _id: 1, name: 'Budweiser', url: '../assets/beers/budweiser.png' },
      { _id: 2, name: "Beck's", url: '../assets/beers/becks.png' },
      { _id: 3, name: 'Hoegaarden', url: '../assets/beers/hoegaarden.png' },
      { _id: 4, name: 'Leffe', url: '../assets/beers/leffe.png' },
      { _id: 5, name: 'Stella', url: '../assets/beers/stella_artois.png' },
      { _id: 6, name: 'Corona', url: '../assets/beers/corona_extra.png' }
    ];
  },
  renderBeers() {
    return this.getBeers().map((beerObject) => {
      return <Beer key={beerObject._id} beer={beerObject} />;
    });
  },
  render() {
    return (
      <div>
        <div className="container-fluid beers">
          <div className="hero">
            <div className="hero-text">
              <img src="../assets/select_beer.svg" />
            </div>
          </div>
        </div>
        <div className="container beers-selection">
          {this.renderBeers()}
        </div>
      </div>
    )
  }
});

Detail = React.createClass({
  render() {
    return (
      <div>
        <div className="container selected-beer">
          <div className="hero">
            <div className="hero-text">
              <img src="/assets/beers/hero_budweiser.svg" />
            </div>
          </div>
          <div className="col-xs-8 col-xs-offset-4 beer-info">
            <div className="flavour">
              <h4>Flavour</h4><br/>
              <span style={{color: '#3f120d'}}>Fruity</span>
            </div>
            <div className="pairings">
              <h4>Best paired with</h4>
              <ul className="list-unstyled">
                <li>Coconut Quinoa + Spinach Salad</li>
                <li>Lemon Chicken with Artichokes</li>
                <li>Roast Chicken with Caramelized Shallots</li>
                <li>Barbecued Shrimp with Ginger & Lime</li>
              </ul>
            </div>
            <Link to="/ready">
              <button className="btn btn-primary btn-block">Play now</button>
            </Link>
          </div>
          </div>
      </div>
    )
  }
});

Thumbnail = React.createClass({
  propTypes: {
    thumbnail: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <div className={this.props.thumbnail.class}>
        <img src={this.props.thumbnail.pictureURL} />
        <br />
        <span>{this.props.thumbnail.name}</span>
      </div>
    );
  }
});

ThumbScore = React.createClass({
  propTypes: {
    thumbnail: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <div className={this.props.thumbnail.class}>
        <img src={this.props.thumbnail.pictureURL}/>
        <br/>
        <span>{this.props.thumbnail.name}</span>
        <div className="score">{this.props.thumbnail.score}</div>
      </div>
    );
  }
});

Ready = React.createClass({
  getUsers() {
    var users = [
      { _id: 0001, name: 'Stevey', pictureURL: 'assets/profiles/1.jpg', score: 0, class: 'player player-one' },
      { _id: 0002, name: 'Phoebe', pictureURL: 'assets/profiles/2.jpg', score: 0, class: 'player player-two' },
      { _id: 0003, name: 'Bud', pictureURL: 'assets/profiles/3.jpg', score: 0, class: 'player player-three' },
      { _id: 0004, name: 'Bagnew', pictureURL: 'assets/profiles/4.jpg', score: 0, class: 'player player-four'  },
      { _id: 0005, name: 'Gazza', pictureURL: 'assets/profiles/5.jpg', score: 0, class: 'player player-five'  }
    ]
    return users;
  },
  getUser(index, addClass) {
    var users = [
      { _id: 0001, name: 'Stevey', pictureURL: 'assets/profiles/1.jpg', score: 0, class: 'player ' + addClass },
      { _id: 0002, name: 'Phoebe', pictureURL: 'assets/profiles/2.jpg', score: 0, class: 'player ' + addClass },
      { _id: 0003, name: 'Bud', pictureURL: 'assets/profiles/3.jpg', score: 0, class: 'player ' + addClass },
      { _id: 0004, name: 'Bagnew', pictureURL: 'assets/profiles/4.jpg', score: 0, class: 'player ' + addClass  },
      { _id: 0005, name: 'Gazza', pictureURL: 'assets/profiles/5.jpg', score: 0, class: 'player ' + addClass  }
    ];
    return users[index];
  },
  renderThumbnails() {
    // console.log(this.getUser(2));
    return this.getUsers().map((userObject) => {
      return <Thumbnail key={userObject._id} thumbnail={userObject} />;
    });
  },
  renderThumbnail(index, addClass) {
    var user = this.getUser(index, addClass);
    return (
      <Thumbnail key={user._id} thumbnail={user} />
    );
  },
  render() {
    return (
      <div>
        <div className="waiting-room">
          <div className="container">
            <div className="waiting-room-players">
              <div className="main-player">
                <span className="timer"><CountdownTimer secondsRemaining="60"/></span><br/>
                <span className="timer-seconds">secs</span>
              </div>
              {this.renderThumbnail(0, 'player-one')}
              {this.renderThumbnail(1, 'player-two')}
              {this.renderThumbnail(2, 'player-three')}
              {this.renderThumbnail(3, 'player-four')}
              {this.renderThumbnail(4, 'player-five')}
            </div>
            <div className="hero">
              <div className="hero-text">
                <h3>Waiting for Players</h3>
                <p>Hang in there! The game will begin shortly and you will have 60 seconds to pick and choose. </p>
              </div>
            </div>
          </div>
          <div className="container next-button-fixed">
            <Link to="/game">
              <button className="btn btn-primary btn-block btn-lg">Play Now</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
});

CountdownTimer = React.createClass({
  getInitialState: function() {
    return {
      secondsRemaining: 0
    };
  },
  tick: function() {
    this.setState({ secondsRemaining: this.state.secondsRemaining - 1});
    if (this.state.secondsRemaining <= 0) {
      clearInterval(this.interval);
    }
  },
  componentDidMount: function() {
    this.setState({ secondsRemaining: this.props.secondsRemaining });
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <span>{this.state.secondsRemaining}</span>
    );
  }
});

FirstWord = React.createClass({
  getInitialState: function() {
    return {
      word: ''
    };
  },
  change: function() {
    this.setState({ word: Session.get("firstWord") });
  },
  componentDidMount: function() {
    this.setState({ word: Session.get("firstWord") });
    this.interval = setInterval(this.change, 100);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <span className="fillers">{this.state.word}</span>
    );
  }
});

SecondWord = React.createClass({
  getInitialState: function() {
    return {
      word: ''
    };
  },
  change: function() {
    this.setState({ word: Session.get("secondWord") });
  },
  componentDidMount: function() {
    this.setState({ word: Session.get("secondWord") });
    this.interval = setInterval(this.change, 100);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <span className="fillers">{this.state.word}</span>
    );
  }
});

Label = React.createClass({
  propTypes: {
    params: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      // stuff
    }
  },
  class: function(type) {
    return "label label-" + type;
  },
  setWord: function() {
    // console.log(this.props.params.name);
    // Session.set("firstWord", this.props.params.name);
    if (Session.equals("firstWord", "") || Session.equals("firstWord", undefined)) {
      Session.set("firstWord", this.props.params.name);
    } else {
      Session.set("secondWord", this.props.params.name);
    }
  },
  render: function() {
    return (
      <div className={this.class(this.props.params.type)} onClick={this.setWord}>{this.props.params.name}</div>
    );
  }
});

Game = React.createClass({
  getUser(index, addClass) {
    var users = [
      { _id: 0001, name: 'Stevey', pictureURL: 'assets/profiles/1.jpg', score: 18, class: 'player ' + addClass },
      { _id: 0002, name: 'Phoebe', pictureURL: 'assets/profiles/2.jpg', score: 12, class: 'player ' + addClass },
      { _id: 0003, name: 'Bud', pictureURL: 'assets/profiles/3.jpg', score: 11, class: 'player ' + addClass },
      { _id: 0004, name: 'Bagnew', pictureURL: 'assets/profiles/4.jpg', score: 9, class: 'player ' + addClass  },
      { _id: 0005, name: 'Gazza', pictureURL: 'assets/profiles/5.jpg', score: 7, class: 'player ' + addClass  }
    ]
    return users[index];
  },
  renderThumbscore(index, addClass) {
    var user = this.getUser(index, addClass);
    return (
      <ThumbScore key={user._id} thumbnail={user} />
    );
  },
  getLabels: function() {
    var labels = [
      { _id: "001", type: 'primary', name: 'Fruity' },
      { _id: "002", type: 'foodpairing', name: 'Artichokes' },
      { _id: "003", type: 'foodpairing', name: 'Chicken' },
      { _id: "004", type: 'foodpairing', name: 'Ginger' },
      { _id: "005", type: 'foodpairing', name: 'Fudge' },
      { _id: "006", type: 'foodpairing', name: 'Caramelised' },
      { _id: "007", type: 'default', name: 'Sexy' },
      { _id: "008", type: 'default', name: 'Balls' },
      { _id: "009", type: 'default', name: 'Shiok' },
      { _id: "010", type: 'default', name: 'Mankini' },
      { _id: "011", type: 'default', name: 'Aliens' },
      { _id: "012", type: 'default', name: 'Drunken' },
      { _id: "013", type: 'default', name: 'Zombies' },
      { _id: "014", type: 'default', name: 'XL' },
      { _id: "015", type: 'default', name: 'Suck' },
    ];
    return labels;
  },
  renderLabels: function() {
    return this.getLabels().map((doc) => {
      return <Label key={doc._id} params={doc} />;
    });
  },
  getCountdown() {
    // var countdown = new ReactiveCountdown(5);
    // countdown.start(function() {
    //   console.log("done?");
    // });
    // return countdown.get();
  },
  getFirstWord: function() {
    // Session.set("firstWord", "Artichokes");
    return Session.get("firstWord");
  },
  getSecondWord: function() {
    // Session.set("secondWord", "Balls");
    return Session.get("secondWord");
  },
  setWord(doc) {
    console.log(doc);
  },
  render() {
    return (
      <div>
        <div className="game">
          <div className="container player-bar">
            {this.renderThumbscore(0, 'active')}
            {this.renderThumbscore(1, '')}
            {this.renderThumbscore(2, '')}
            {this.renderThumbscore(3, '')}
            {this.renderThumbscore(4, '')}
          </div>
          <div className="container the-word">
            <div className="hero">
              <div className="hero-text">
                <h1>LIFE IS BETTER WHEN IT'S FULL OF <FirstWord word={this.getFirstWord()}/><SecondWord word={this.getSecondWord()}/>.</h1>
              </div>
            </div>
            <h4 className="text-center">Pick 2 words to fill the blanks.</h4>
            {this.renderLabels()}
          </div>
          <div className="timer">
            <CountdownTimer secondsRemaining="60"/>
          </div>
          <div className="container next-button-fixed">
            <Link to="/judge">
            <button className="btn btn-primary btn-block btn-lg">Waiting for other players <i className="fa fa-spinner fa-spin fa-fw"></i></button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
});

Judge = React.createClass({
  getUser(index, addClass) {
    var users = [
      { _id: 0001, name: 'Stevey', pictureURL: 'assets/profiles/1.jpg', score: 18, class: 'player ' + addClass },
      { _id: 0002, name: 'Phoebe', pictureURL: 'assets/profiles/2.jpg', score: 12, class: 'player ' + addClass },
      { _id: 0003, name: 'Bud', pictureURL: 'assets/profiles/3.jpg', score: 11, class: 'player ' + addClass },
      { _id: 0004, name: 'Bagnew', pictureURL: 'assets/profiles/4.jpg', score: 9, class: 'player ' + addClass  },
      { _id: 0005, name: 'Gazza', pictureURL: 'assets/profiles/5.jpg', score: 7, class: 'player ' + addClass  }
    ]
    return users[index];
  },
  renderThumbscore(index, addClass) {
    var user = this.getUser(index, addClass);
    return (
      <ThumbScore key={user._id} thumbnail={user} />
    );
  },
  render() {
    return (
      <div>
        <div className="game judger">
          <div className="container player-bar">
            {this.renderThumbscore(0, '')}
            {this.renderThumbscore(1, '')}
            {this.renderThumbscore(2, 'active')}
            {this.renderThumbscore(3, '')}
            {this.renderThumbscore(4, '')}
          </div>
            <div className="container the-word">
              <div className="hero">
                <div className="hero-text">
                  <h1>LIFE IS BETTER WHEN IT'S FULL OF <span className="fillers"></span><span className="fillers"></span>.</h1>
                </div>
              </div>
              <h4 className="text-center">Pick your favourite answer.</h4>
              <div>
                <div className="input-group">
                  <input id="option" type="radio" name="field" value="option"/>
                  <label for="option">
                    <span className="label label-foodpairing"><FirstWord/></span>&nbsp;
                    <span className="label label-default"><SecondWord/></span>
                  </label>
                  <div className="score-notification play-score-outro">+3</div>
                </div>
                <div className="input-group">
                  <input id="option" type="radio" name="field" value="option"/>
                  <label for="option">
                    <span className="label label-foodpairing">Ginger</span>&nbsp;
                    <span className="label label-default">Aliens</span>
                  </label>
                </div>
                <div className="input-group">
                  <input id="option" type="radio" name="field" value="option"/>
                  <label for="option">
                    <span className="label label-primary">Fruity</span>&nbsp;
                    <span className="label label-default">Zombies</span>
                  </label>
                </div>
                <div className="input-group">
                  <input id="option" type="radio" name="field" value="option"/>
                  <label for="option">
                    <span className="label label-default">Hairy</span>&nbsp;
                    <span className="label label-default">Grandmas</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="container">
              <Link to="/gameEnd">
                <button className="btn btn-primary btn-block btn-lg">Next Round</button>
              </Link>
            </div>
        </div>
      </div>
    );
  }
});

GameEnd = React.createClass({
  sendMessage: function() {
    Meteor.call('sendMessage');
    Session.set('firstWord', "");
    Session.set('secondWord', "");
  },
  render() {
    return (
      <div>
        <div className="game game-over">
          <div className="container the-word">
            <div className="hero">
              <div className="hero-text">
                <h1>Total Scores</h1>
                <h2>Game Over!</h2>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row selected">
              <div className="col-xs-12 player-summary-outer">
                <div className="player-summary">
                  <img src="../assets/profiles/1.jpg" />
                  <h5>Stevey</h5>
                  <div className="scoring">Winner!<span className="label label-primary">18</span></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 player-summary-outer">
                <div className="player-summary">
                  <img src="../assets/profiles/2.jpg" />
                  <h5>Phoebe</h5>
                  <div className="scoring"><span className="label label-default">12</span></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 player-summary-outer">
                <div className="player-summary">
                  <img src="../assets/profiles/3.jpg" />
                  <h5>Bud</h5>
                  <div className="scoring"><span className="label label-default">11</span></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 player-summary-outer">
                <div className="player-summary">
                  <img src="../assets/profiles/4.jpg" />
                  <h5>Bagnew</h5>
                  <div className="scoring"><span className="label label-default">9</span></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 player-summary-outer">
                <div className="player-summary">
                  <img src="../assets/profiles/5.jpg" />
                  <h5>Gazza</h5>
                  <div className="scoring"><span className="label label-default">7</span></div>
                </div>
              </div>
            </div>
            <div className="row scoring-footer">
              <div className="col-xs-12">
                <p>Register your name and mobile number to save your points and continue to play for more rewards!</p>
                <div className="row scoring-footer-inputs">
                  <div className="col-xs-6">
                    <input type="text" className="form-control" placeholder="Name" />
                  </div>
                  <div className="col-xs-6">
                    <input type="text" className="form-control" placeholder="Contact" />
                  </div>
                </div>
                <Link to="/selection">
                  <button className="btn btn-primary btn-block btn-lg" onClick={this.sendMessage}>Start another game</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

/* ========================================================== */

// The component with all of the routes
Routes = React.createClass({
  getInitialState() {
    return {
      // Anything here
    };
  },
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Index}/>
          <Route path="howto" component={How}/>
          <Route path="selection" component={Selection}/>
          <Route path="detail" component={Detail}/>
          <Route path="ready" component={Ready}/>
          <Route path="game" component={Game}/>
          <Route path="judge" component={Judge}/>
          <Route path="gameEnd" component={GameEnd}/>
        </Route>
      </Router>
    );
  }
});



// Rendering
Meteor.startup(function() {
  React.render(<Routes/>, document.body);
});

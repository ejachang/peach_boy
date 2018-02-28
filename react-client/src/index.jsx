import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Comic from './components/Comic.jsx';
import fakeDBS from './fakeDropboxStorage.js';

// url = what path on what server to find what picture of a cat
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: {
        'boy': 'https://photos-3.dropbox.com/t/2/AAAImdpi5RLusaiT_XWV16cfy21O5YpaGCJchtoeIHTRUA/12/43349288/png/32x32/1/_/1/2/avatar-boy.png/EPGgkyEYyhIgAigC/2JgSb4Ux0I9_W7KXe8LETz7J2A8Fr5q7D914O_lhmss?preserve_transparency=1&size=2048x1536&size_mode=3',
        'girl': 'https://photos-6.dropbox.com/t/2/AABvqIcg7IOjmDNbo5y0yPDhrlu-o6D4xc5m1c2BENOdIQ/12/43349288/png/32x32/1/_/1/2/avatar-girl.png/EPGgkyEYyhIgAigC/LFZHUyfB2ahQ9CMj88lbwERIzMp_aRhz10Q35oiP2dE?preserve_transparency=1&size=2048x1536&size_mode=3',
        'grill': 'https://photos-6.dropbox.com/t/2/AACetjLim3ARs1dn3R98o-9-G2W_uTlbwH_K6FXstu5VUw/12/43349288/png/32x32/1/_/1/2/avatar-grill.png/EPGgkyEYyhIgAigC/LJySAqFo0nvSh8O2NwXZhwxvxevyxnlp1P6Moo9ya6Y?preserve_transparency=1&size=2048x1536&size_mode=3'
      },
      selected:'girl',
      name: 'Enter name here',
      displayedName: '',
      achievements: [],
      achievementImages: [
        'https://photos-1.dropbox.com/t/2/AAApAppKMtR_lkXLg7-MR-8RmHBG8s4OrxHMECJXdw4rcw/12/43349288/png/32x32/1/_/1/2/modal1.png/EPGgkyEYyxIgAigC/Iaebm0G205oRI4B4OSaIbHc1eG45mAeOhmMriqjXvqM?preserve_transparency=1&size=2048x1536&size_mode=3',
        'https://www.dropbox.com/s/bhcl414nnikp4pi/modal2.png?dl=0',
        'https://www.dropbox.com/s/5vg9caj7rikmz3j/modal3.png?dl=0',
        'https://www.dropbox.com/s/w1o94t50mtus4gb/modal4.png?dl=0',
        'https://www.dropbox.com/s/362x66oqmt915d0/modal5.png?dl=0',
        'https://www.dropbox.com/s/ucijjpqb8xrikuo/modal-end.png?dl=0',
        'https://www.dropbox.com/s/mu4x7rd30mzhdww/modal-default-end.png?dl=0',
      ],
      iidx: 0,
      idx: 0,
      clicks: 0,
      peachStatus: [
        'Just Peachy!',
        'Aren\'t you a peach',
        'I appeachiate you!',
        'Peach for the stars!',
        'You only peach once',
        'You want a peach of me???',
        'You\'ve got a peach of my heart',
        'Peach, don\'t kill my vibe',
        'My life is a peach of sheeps',
        'I\'ve got 99 problems but a peach ain\'t one',
        'Practice what you peach',
        'Impeachable',
        'Touch the Peach Award',
        'Aren\'t you peached yet',
        'Peach me I\'m dreaming',
        'Peach better have my money',
        'No more peaches!'
      ],
      comicPanelIdx: 0,
      comics: [
        [
          'https://www.dropbox.com/s/rys415fqcdaniw1/s-1-1.jpg?dl=0',
          'https://www.dropbox.com/s/oivjakwz7iv1ter/s-1-2.jpg?dl=0',
          'https://www.dropbox.com/s/v1iiik7j2vl02ah/s-1-3.jpg?dl=0'
        ],
        [
          'https://www.dropbox.com/s/v1iiik7j2vl02ah/s-1-3.jpg?dl=0',
          'https://www.dropbox.com/s/v1iiik7j2vl02ah/s-1-3.jpg?dl=0',
          'https://www.dropbox.com/s/v1iiik7j2vl02ah/s-1-3.jpg?dl=0'
        ]
      ],
      comicPanelOne: 'https://www.dropbox.com/s/v1iiik7j2vl02ah/s-1-3.jpg?dl=0',
      comicPanelTwo: 'https://www.dropbox.com/s/v1iiik7j2vl02ah/s-1-3.jpg?dl=0',
      comicPanelThree: 'https://www.dropbox.com/s/v1iiik7j2vl02ah/s-1-3.jpg?dl=0',
      appear: 'hide',
      toggled: false

    }
  this.peachClicked = this.peachClicked.bind(this);
  this.achievementUnlocked = this.achievementUnlocked.bind(this);
  this.addAchievement = this.addAchievement.bind(this);
  this.setImage = this.setImage.bind(this);
  this.setAvatar = this.setAvatar.bind(this);
  this.getRandomIntInclusive = this.getRandomIntInclusive.bind(this);
  this.nextComicPanel = this.nextComicPanel.bind(this);
  this.comicPanelOneA = this.comicPanelOneA.bind(this);
  this.comicPanelTwoA = this.comicPanelTwoA.bind(this);
  this.comicPanelThreeA = this.comicPanelThreeA.bind(this);
  this.showComic = this.showComic.bind(this);
  this.hideComic = this.hideComic.bind(this);
  this.toggleComic = this.toggleComic.bind(this);
  this.comicUnlocked = this.comicUnlocked.bind(this);
  this.getUsername = this.getUsername.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
  }
  //use for when using get api
  // componentDidMount() {
  //   $.ajax({
  //     method: '',
  //     url: '/achievements',
  //     success: (data) => {
  //       this.setState({
  //         achievements: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }
  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleSubmit(event) {
    this.setState({
      displayedName: this.state.name
    })
  }

  getUsername(event) {
  };

  setAvatar(avatar) {
    if (avatar === 'girl') {
      this.setState({ selected: 'girl' })
    } else if (avatar === 'boy') {
      this.setState({ selected: 'boy' })
    } else if (avatar === 'grill') {
      this.setState({ selected: 'grill' })
    }

  };

  addAchievement() {
    this.setState({
      achievements: this.state.achievements.concat(this.state.peachStatus[--this.state.idx])
    });
  };

  achievementUnlocked() {
    this.setState({
      idx: ++this.state.idx
    });
  };
  setImage() {
    this.setState({
      iidx: this.state.iidx + 1
    })
  }

  peachClicked() {
    this.setState({
      clicks: ++this.state.clicks
    });

    if (this.state.clicks % 1 === 0 && this.state.idx < this.state.peachStatus.length - 1) {
      this.achievementUnlocked()
      this.addAchievement()
      this.state.iidx < 6 ? this.setImage() : null

      if (this.state.achievements.length === 4) {
        this.showComic()
        this.toggleComic()
      } else {
        this.hideComic()
      }
    }

  };

  comicUnlocked() {
    console.log('success')
  }

  toggleComic() {
    this.setState({
      classes: this.comicUnlocked
    });
  };

  showComic() {
    this.setState({
      appear: 'show'
    });
  };

  hideComic() {
    this.setState({
      appear: 'hide'
    });
  };

  // <form onSubmit={this.handleSubmit}>
  //       <label>
  //         Name:
  //         <input type="text" value={this.state.value} onChange={this.handleChange} />
  //       </label>
  //       <input type="submit" value="Submit" />
  //     </form>

  render() {
    return (<div>
      <h1 className="peachTitle">Son of a Peach</h1>
      <h4 className="peachTitle">click the peach to free him</h4>
      <form onSubmit={this.handleSubmit}>
        <label className="peachForm">
        <h3> My name is:</h3>
        <input type="text" value={this.state.name}
          onChange={this.handleChange}></input>
        </label>
        <input type="submit" value="Submit" className="peachButton"/>
      </form>

      <h3 className="peachForm">
          I am a:
          <button className="peachButton peachGirl" onClick={() => this.setAvatar('girl')}>
            Girl</button>
          <button className="peachButton peachBoy" onClick={() => this.setAvatar('boy')}>
            Boy</button>
          <button className="peachButton peachGrill" onClick={() => this.setAvatar('grill')}>
            Grill</button>
      </h3>

      <List achievements={this.state.achievements}
        aidx={this.state.idx}
        peachClickCount={this.state.clicks}
        currentPeachStatus={this.state.peachStatus}
        />
      <p></p>
      <a href="#" onClick={this.peachClicked}>
        <img src={this.state.achievementImages[this.state.iidx]}
          id="achievementImage"
          />
      </a>
      <a>
        <img src={this.state.avatar[this.state.selected]}
          className="avatar"/>
      </a>
      <span className="peachName">{this.state.displayedName}</span>
    <Comic
      hooha={this.state.appear}
      next={this.nextComicPanel}
      one={this.state.comicPanelOne}
      two={this.state.comicPanelTwo}
      three={this.state.comicPanelThree}
      />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

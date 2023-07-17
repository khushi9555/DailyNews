import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 12,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }

  }

  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    this.props.setProgress(50);
    let data = await fetch(url);
    this.props.setProgress(80);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    document.title = `DailyNews - ${this.capitalizeFirstLetter(this.props.category)}`;
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }



  fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({ page: this.state.page + 1 });
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false
    })
    document.title = `DailyNews - ${this.capitalizeFirstLetter(this.props.category)}`;
  }

  render() {
    return (
      <>

        <h2 className="text-center" style={{ margin: '40px 0px', marginTop : '90px' }}>DailyNews - Top  {this.capitalizeFirstLetter(this.props.category)} Headlines </h2>
        {/* {this.state.loading && <Spinner/>} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.totalResults}
          loader={this.state.loading && <Spinner />}
          style={{overflow : 'hidden'}}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return <div className="col-lg-3 col-md-4 col-sm-6" key={element.url}   >
                  <NewsItem title={element.title != null ? element.title.slice(0, 100) : " "} description={element.description != null ? element.description.slice(0, 100) : " "} imageurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                </div>
              })}
            </div>
          </div>

        </InfiniteScroll>

      </>
    )
  }
}

export default News

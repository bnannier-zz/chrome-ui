import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
  selectSubreddit,
  fetchPostsIfNeeded,
  invalidateSubreddit
} from './Actions'

import Picker from './Picker'
import Posts from './Posts'

/**
 * @description Login component - renders the login page
 */
class Login extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleRefreshClick = this.handleRefreshClick.bind(this)

        // const queryProps = queryString.parse(this.props.location.search);
        // urlParam(queryProps.sig || queryProps.oauth_key_signature, queryProps.id || queryProps.oauth_key);
        // this.props.mofo("reactjs")

        //login({providerId: 1, providerSig: 2, body: 3});
    }

    componentDidMount() {
        const { dispatch, selectedSubreddit } = this.props
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedSubreddit !== prevProps.selectedSubreddit) {
            const { dispatch, selectedSubreddit } = this.props
            dispatch(fetchPostsIfNeeded(selectedSubreddit))
        }
    }

    handleChange(nextSubreddit) {
        this.props.dispatch(selectSubreddit(nextSubreddit))
        this.props.dispatch(fetchPostsIfNeeded(nextSubreddit))
    }

    handleRefreshClick(e) {
        e.preventDefault()

        const { dispatch, selectedSubreddit } = this.props
        dispatch(invalidateSubreddit(selectedSubreddit))
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }

    render() {
        const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props
        return (
            <div>
                <Picker
                    value={selectedSubreddit}
                    onChange={this.handleChange}
                    options={['reactjs', 'frontend']}
                />
                <p>
                    {lastUpdated &&
                    <span>
                        Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
                        {' '}
                    </span>}
                    {!isFetching &&
                    <a href="#" onClick={this.handleRefreshClick}>
                        Refresh
                    </a>}
                </p>
                {isFetching && posts.length === 0 && <h2>Loading...</h2>}
                {!isFetching && posts.length === 0 && <h2>Empty.</h2>}
                {posts.length > 0 &&
                <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                    <Posts posts={posts}/>
                </div>}
            </div>
        )
    }
}

Login.propTypes = {
    selectedSubreddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    const { selectedSubreddit, postsBySubreddit } = state
    const {
        isFetching,
        lastUpdated,
        items: posts
    } = postsBySubreddit[selectedSubreddit] || {
        isFetching: true,
        items: []
    }

    return {
        selectedSubreddit,
        posts,
        isFetching,
        lastUpdated
    }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // login: (data) => dispatch(login(data)),
//    // urlParam: (providerId, providerSig) => this.props.dispatch(urlParam(providerId, providerSig))
//     mofo: (someval) => dispatch(fetchPostsIfNeeded(someval))
//   }
// }

export default connect(mapStateToProps)(Login)

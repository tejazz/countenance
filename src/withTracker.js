import React, { Component } from 'react';
import ReactAnalytics from 'react-ga';

ReactAnalytics.initialize('UA-145416538-1');

const withTracker = (WrappedComponent, options = {}) => {
    const trackPage = page => {
        ReactAnalytics.set({
            page,
            ...options,
        });
        ReactAnalytics.pageview(page);
    };

    // eslint-disable-next-line
    const HOC = class extends Component {
        componentDidMount() {
            // eslint-disable-next-line
            const page = this.props.location.pathname + this.props.location.search;
            trackPage(page);
        }

        componentDidUpdate(prevProps) {
            const currentPage =
                prevProps.location.pathname + prevProps.location.search;
            const nextPage =
                this.props.location.pathname + this.props.location.search;

            if (currentPage !== nextPage) {
                trackPage(nextPage);
            }
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };

    return HOC;
};

export default withTracker;
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchLink } from '../actions/index';
import { Dispatch } from 'redux';

interface SearchLinkProps {
    searchText: string;
    searchLink: (text: string) => Dispatch<Object>;
}

class SearchLink extends React.Component<SearchLinkProps, {}> {
    render() {
        return (
            <input
                className="search-field"
                type="text"
                placeholder="Search Links"
                onChange={(e) => { this.props.searchLink(e.currentTarget.value); }}
                value={this.props.searchText}
            />
        );
    }
}
function mapStateToProps(state: { [key: string]: Object }) {
    return {
        searchText: state.searchLink
    };
}
function mapDispatchToProps(dispatch: Dispatch<Object>) {
    return bindActionCreators({ searchLink: searchLink }, dispatch);
}
// export default SearchLink;
export default connect(mapStateToProps, mapDispatchToProps)(SearchLink);
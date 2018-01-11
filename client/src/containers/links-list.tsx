import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchLink } from '../actions/index';

import { Dispatch } from 'redux';

interface LinksListProps {
    showLinks: { title: string, url: string, tags: string[] }[];
    searchLink: string;
    fetchLink: () => Dispatch<Object>;
}

class LinksList extends React.Component<LinksListProps, {}> {
    componentWillMount() {
        this.props.fetchLink();
    }
    render() {
        return (
            this.props.showLinks.map((link: { title: string, url: string, tags: string[] }) => {
                // console.log(link);
                return (
                    link.title.toLowerCase().indexOf(this.props.searchLink.toLowerCase()) > -1
                        || link.url.toLowerCase().indexOf(this.props.searchLink.toLowerCase()) > -1
                        || link.tags.join(' ').toLowerCase().indexOf(this.props.searchLink.toLowerCase()) > -1
                        ?
                        (
                            <li
                                className="link-item"
                                key={link.url}
                            >
                                <a href={link.url} target="_blank">{link.title}</a> {link.tags.join(' ')}
                            </li>
                        )
                        : null
                );
            })
        );
    }
}

function mapStateToProps(state: { [key: string]: Object }) {
    return {
        showLinks: state.showLinks,
        searchLink: state.searchLink
    };
}
function mapDispatchToProps(dispatch: Dispatch<Object>) {
    return bindActionCreators({ fetchLink }, dispatch);
}
// export default LinksList;
export default connect(mapStateToProps, mapDispatchToProps)(LinksList);
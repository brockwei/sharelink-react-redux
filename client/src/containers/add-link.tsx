import * as React from 'react';
// import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeTitle, changeUrl, changeTags, addLink } from '../actions/index';
import { Dispatch } from 'redux';

interface AddLinkProps {
    title: { text: string, valid: boolean };
    url: { text: string, valid: boolean };
    tags: { text: string, valid: boolean };
    changeTitle: (text: string) => Dispatch<Object>;
    changeUrl: (text: string) => Dispatch<Object>;
    changeTags: (text: string) => Dispatch<Object>;
    addLink: (websiteLink: { title: string, url: string, tags: string[] }) => Dispatch<Object>;
    history: string[];
}

class AddLink extends React.Component<AddLinkProps, {}> {
    render() {
        // console.log(changeTitle);
        return (
            <div>
                <form
                    className="add-links-form"
                    onSubmit={
                        (e) => {
                            const websiteLink = {
                                title: this.props.title.text,
                                url: this.props.url.text,
                                tags: this.props.tags.text.split(',')
                            };
                            if (this.props.title.valid && this.props.url.valid && this.props.tags.valid) {
                                this.props.addLink(websiteLink);
                                this.props.changeTitle('');
                                this.props.changeUrl('');
                                this.props.changeTags('');
                                this.props.history.push('/');
                            }
                            e.preventDefault();
                        }
                    }
                >
                    <label>
                        <br />
                        <input
                            type="text"
                            placeholder="Title"
                            onChange={(e) => {
                                this.props.changeTitle(e.currentTarget.value);
                            }}
                            value={this.props.title.text}
                        />
                        {
                            this.props.title.valid ? null : <div className="warning">Title must have 1 letter</div>
                        }
                    </label>
                    <label>
                        <br />
                        <input
                            type="text"
                            placeholder="URL"
                            onChange={(e) => {
                                this.props.changeUrl(e.currentTarget.value);
                            }}
                            value={this.props.url.text}
                        />
                        {
                            this.props.url.valid ? null : <div className="warning">Enter valid website</div>
                        }
                    </label>
                    <label>
                        <br />
                        <input
                            type="text"
                            placeholder="Tags (Separate with comma)"
                            onChange={(e) => {
                                this.props.changeTags(e.currentTarget.value);
                            }}
                            value={this.props.tags.text}
                        />
                        {
                            this.props.tags.valid ? null : <div className="warning">Enter at least 1 tag</div>
                        }
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <br />
            </div>

        );
    }
}

function mapStateToProps(state: { [key: string]: Object }) {
    // console.log(state);
    return {
        // input: state.formInput
        title: state.changeTitle,
        url: state.changeUrl,
        tags: state.changeTags
    };
}

function mapDispatchToProps(dispatch: Dispatch<Object>) {
    return bindActionCreators(
        {
            changeTitle: changeTitle,
            changeUrl: changeUrl,
            changeTags: changeTags,
            addLink: addLink
        },
        dispatch);
}

// export default AddLink;
export default connect(mapStateToProps, mapDispatchToProps)(AddLink);
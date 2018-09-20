import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Typography, Input, Button, Card, CardContent } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {}

class CommentForm extends Component {
    state = {
        body: '',
    }
    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <Typography component="h1" variant="display2">Leave a new comment</Typography>
                <Card className={classes.card}>
                    <CardContent>            
                        <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
                            <Input name="body" value={this.state.body} onChange={this.handleChange} fullWidth disableUnderline multiline rows={5} className={classes.body}/> 
                            <Button variant="outlined" color="primary" onClick={this.addComment}>Add Comment</Button> 
                        </form>
                    </CardContent>
                </Card>
            </Fragment>
        );
    }
    handleSubmit = (event) => {
        event.preventDefault();
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    addComment = () => {
        this.props.addComment(this.state.body);
        this.setState({
            body:''
        })
    }
}

CommentForm.propTypes = {
    classes: PropTypes.object.isRequired,
    addComment: PropTypes.func.isRequired
}

export default withStyles(styles)(CommentForm);
import React, { Component } from "react";
import "./Header.css";
import { Input, withStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const webStyles = (theme) => ({
    inputRoot: {
        color: "inherit",
        "&:after": {
            borderBottom: "2px solid white !important",
        },
    },
});

class HeaderSearchComponent extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="searchContainer">
                <Input
                    id="search-item"
                    onChange={(event) =>
                        this.props.searchRestaurantByTitle(event.target.value)
                    }
                    type="text"
                    classes={{
                        root: classes.inputRoot,
                    }}
                    placeholder="Search by Restaurant Name"
                    startAdornment={<SearchIcon className="headerSearchIcon" />}
                />
            </div>
        );
    }
}

export default withStyles(webStyles)(HeaderSearchComponent);

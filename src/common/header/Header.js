import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AppBar, Grid, Toolbar } from "@material-ui/core";
import Fastfood from "@material-ui/icons/Fastfood";
import HeaderSearchBar from "./HeaderSearchBar";
import HeaderLogin from "./HeaderLogin";
import "./Header.css";

class Header extends Component {
    render() {
        return (
            <AppBar
                position="static"
                style={{ backgroundColor: "#263238", boxShadow: "none" }}
                className="fbar-header"
            >
                <Toolbar>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    >
                        <Link to="/">
                            <Fastfood className="logo-icon" />
                        </Link>

                        <div className="fbar-search-container">
                            {this.props.screen === "home" ? (
                                <HeaderSearchBar
                                    searchRestaurantByTitle={
                                        this.props.searchRestaurantByTitle
                                    }
                                />
                            ) : (
                                <span>&nbsp;</span>
                            )}
                        </div>

                        <HeaderLogin
                            userInfo={this.props.userInfo}
                            updateUserInfoState={this.props.updateUserInfoState}
                        />
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;

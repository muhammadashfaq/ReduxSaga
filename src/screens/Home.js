import React, { Component } from "react";
import { View, Text, Button, Image, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { requestDog } from "../redux/actions/actions";

class Home extends Component {
  render() {
    const { loading, url, error } = this.props;
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text>Welcome to Dog Saga</Text>
        <Button title={"Show Dog"} onPress={this.props.onRequestDog} />
        {loading ? (
          <ActivityIndicator size="large" color={"red"} />
        ) : error ? (
          <Text>Error Occured</Text>
        ) : (
          <Image source={{ uri: url }} style={{ width: 500, height: 500 }} />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => state.apiReducer;

const mapDispatchToProps = dispatch => ({
  onRequestDog: () => dispatch(requestDog())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

import React, { Component } from "react";
import { View, Text, Button, Image, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { requestDog } from "../redux/actions/actions";

class Home extends Component {
  componentDidUpdate() {
    console.log(this.props);
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    console.log(nextProps, nextState);
  };

  render() {
    const { loading, url, error, onRequestDog } = this.props;
    console.log(url);
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text>Welcome to Dog Saga</Text>
        <Button title={"Show Dog"} onPress={onRequestDog} />
        {loading ? (
          <ActivityIndicator size="large" color={"red"} />
        ) : error ? (
          <Text>Error Occured</Text>
        ) : (
          <Image
            source={{ uri: this.props.url }}
            style={{ width: 100, height: 100 }}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    url: state.url,
    loading: state.loading,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch(requestDog())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

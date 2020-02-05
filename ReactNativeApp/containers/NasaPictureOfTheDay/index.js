import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Text, ScrollView, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

import TitledMedia from '../../components/TitledMedia';
import DialogueBox from '../../components/DialogueBox';
import PreviousNextInformationButtonGroup from '../../components/PreviousNextInformationButtonGroup';

import {
  getNasaPictureOfTheDayAction,
  putNasaPictureOfTheDayErrorAction,
  putDisplayNasaPictureOfTheDayExplanationAction,
} from '../../actions/nasaPictureOfTheDay';

class NasaPictureOfTheDay extends Component {
  componentDidMount() {
    this.props.getNasaPictureOfTheDayHandler();
  }

  isError = () => {
    const {error} = this.props;
    return error.length > 0;
  };

  isLoading = () => {
    const {isLoading} = this.props;
    return isLoading;
  };

  isDisplayInformation = () => {
    const {displayExplanation} = this.props;
    return displayExplanation;
  };

  isDisplayImage = () => {
    const {url} = this.props.data;
    return !this.isLoading() && !this.isError() && !this.isDisplayInformation() && url.length > 0;
  };

  render() {
    const styles = StyleSheet.create({
      mainView: {
        backgroundColor: 'black',
        paddingTop: 25,
      },
      scrollView: {
        backgroundColor: 'black',
      },
      heading: {
        backgroundColor: 'black',
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
      },
      loading: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
      },
    });

    const {
      error,
      getNasaPictureOfTheDayHandler,
      putDisplayNasaPictureOfTheDayExplanationHandler,
      resetNasaPictureOfTheDayErrorHandler,
    } = this.props;
    const {url, date, hdurl, title, media_type, explanation} = this.props.data;

    return (
      <View style={styles.mainView}>
        {this.isLoading() && <Text style={styles.loading}>Please wait, loading....</Text>}

        {this.isDisplayInformation() && (
          <DialogueBox
            title={title}
            information={explanation}
            closeHandler={() => this.props.putDisplayNasaPictureOfTheDayExplanationHandler(false)}
          />
        )}

        {this.isError() > 0 && (
          <DialogueBox
            title={'Something went wrong....'}
            information={error}
            closeHandler={() => resetNasaPictureOfTheDayErrorHandler()}
          />
        )}

        {this.isDisplayImage() && (
          <ScrollView style={styles.scrollView}>
            <Text style={styles.heading}>NASA Picture of the Day</Text>
            <PreviousNextInformationButtonGroup
              previousHandler={() => getNasaPictureOfTheDayHandler(-1)}
              nextHandler={() => getNasaPictureOfTheDayHandler(1)}
              infoHandler={() => putDisplayNasaPictureOfTheDayExplanationHandler(true)}
            />

            <TitledMedia title={title} date={date} url={url} hdurl={hdurl} mediaType={media_type} />
          </ScrollView>
        )}
      </View>
    );
  }
}

NasaPictureOfTheDay.propTypes = {
  data: PropTypes.object.isRequired,
  displayExplanation: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  getNasaPictureOfTheDayHandler: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  putDisplayNasaPictureOfTheDayExplanationHandler: PropTypes.func.isRequired,
  resetNasaPictureOfTheDayErrorHandler: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    data: state.nasaPictureOfTheDay.data,
    displayExplanation: state.nasaPictureOfTheDay.displayExplanation,
    error: state.nasaPictureOfTheDay.error,
    isLoading: state.nasaPictureOfTheDay.isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNasaPictureOfTheDayHandler: day => dispatch(getNasaPictureOfTheDayAction(day)),
    resetNasaPictureOfTheDayErrorHandler: () => dispatch(putNasaPictureOfTheDayErrorAction('')),
    putDisplayNasaPictureOfTheDayExplanationHandler: display => dispatch(putDisplayNasaPictureOfTheDayExplanationAction(display)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NasaPictureOfTheDay);

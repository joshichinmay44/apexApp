import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Avatar, Appbar, Button, Card, Title} from 'react-native-paper';
import styles from '../../style/Style';
export default class EligibilityResultArmy extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  backArmy = () => {
    this.props.navigation.navigate('EligibilityFormArmy');
  };

  backNavy = () => {
    this.props.navigation.navigate('EligibilityFormNavy');
  };

  backAir = () => {
    this.props.navigation.navigate('EligibilityFormAirForce');
  };

  renderTitle = (attempt, course) => {
    return 'You have ' + attempt + ' attempts left for ' + course;
  };

  renderCdsPC = attemptCdsPC => {
    if (attemptCdsPC <= 0) {
      return (
        <View>
          <Text style={styles.detail}>
            You do not have any CDS (IMA) attempts left.
          </Text>
        </View>
      ); /* <Card.Title title="You do not have any CDS (IMA) attempts left" />; */
    } else {
      return (
        <Card style={styles.cardContainer}>
          {/*  <Card.Title
            title={this.renderTitle(attemptCdsPC, 'CDS(IMA)')} 
            subtitle="Press for more details"></Card.Title> */}
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('CDS')}>
            <View>
              <Text style={styles.detail}>
                {this.renderTitle(attemptCdsPC, 'CDS(IMA)')}
              </Text>
              <Text style={styles.MoreDetail}>Press for more details</Text>
            </View>
            <Card.Cover source={require('../../images/CDSEligibility.jpg')} />
          </TouchableOpacity>
        </Card>
      );
    }
  };

  renderNDA = attemptNDA => {
    if (attemptNDA <= 0) {
      return (
        <View>
          <Text style={styles.detail}>
            You do not have any NDA attempts left.
          </Text>
          {/*   <Card.Title title="You do not have any NDA attempts left" /> */}
        </View>
      );
    } else {
      return (
        <Card style={styles.cardContainer}>
          {/* <Card.Title
            title={this.renderTitle(attemptNDA, 'NDA')}
            subtitle="Press for more details"></Card.Title> */}
          <View>
            <Text style={styles.detail}>
              {this.renderTitle(attemptNDA, 'NDA')}
            </Text>
            <Text style={styles.MoreDetail}>Press for more details</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('NDA')}>
            <Card.Cover source={require('../../images/NDAEligibility.jpg')} />
          </TouchableOpacity>
        </Card>
      );
    }
  };

  renderTES = attemptTES => {
    if (attemptTES <= 0) {
      return (
        <View>
          <Text style={styles.detail}>
            You do not have any TES attempts left.
          </Text>
          {/*     <Card.Title title="You do not have any TES attempts left" /> */}
        </View>
      );
    } else {
      return (
        <Card style={styles.cardContainer}>
          {/*  <Card.Title
            title={this.renderTitle(attemptTES, 'TES')}
            subtitle="Press for more details"
          /> */}
          <View>
            <Text style={styles.detail}>
              {this.renderTitle(attemptTES, 'TES')}
            </Text>
            <Text style={styles.MoreDetail}>Press for more details</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('TES')}>
            <Card.Cover source={require('../../images/TESEligibility.jpg')} />
          </TouchableOpacity>
        </Card>
      );
    }
  };

  renderCdsSSC = attemptCdsSSC => {
    if (attemptCdsSSC <= 0) {
      return (
        <View>
          <Text style={styles.detail}>
            You do not have any CDS (OTA) attempts left.
          </Text>
          {/*  <Card.Title title="You do not have any CDS (OTA) attempts left" /> */}
        </View>
      );
    } else {
      return (
        <Card style={styles.Card}>
          {/*   <Card.Title
            title={this.renderTitle(attemptCdsSSC, 'CDS(OTA)')}
            subtitle="Press for more details"
          /> */}
          <View>
            <Text style={styles.detail}>
              {this.renderTitle(attemptCdsSSC, 'CDS(OTA)')}
            </Text>
            <Text style={styles.MoreDetail}>Press for more details</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('CDS')}>
            <Card.Cover
              source={require('../../images/CDSOTAEligibility.jpg')}
            />
          </TouchableOpacity>
        </Card>
      );
    }
  };

  renderNCC = attemptNCC => {
    if (attemptNCC <= 0) {
      return (
        <View>
          <Text style={styles.detail}>
            You do not have any NCC attempts left.
          </Text>
          {/* <Card.Title title="You do not have any NCC attempts left" /> */}
        </View>
      );
    } else {
      return (
        <Card style={styles.Card}>
          {/*  <Card.Title
            title={this.renderTitle(attemptNCC, 'NCC Entry')}
            subtitle="Press for more details"
          /> */}
          <View>
            <Text style={styles.detail}>
              {this.renderTitle(attemptNCC, 'NCC Entry')}
            </Text>
            <Text style={styles.MoreDetail}>Press for more details</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('NCC')}>
            <Card.Cover source={require('../../images/NCCEligibility.jpeg')} />
          </TouchableOpacity>
        </Card>
      );
    }
  };

  renderTGC = attemptTGC => {
    if (attemptTGC <= 0) {
      return (
        <View>
          <Text style={styles.detail}>
            You do not have any TGC attempts left.
          </Text>
          {/*     <Card.Title title="You do not have any TGC attempts left" /> */}
        </View>
      );
    } else {
      return (
        <Card style={styles.Card}>
          {/*  <Card.Title
            title={this.renderTitle(attemptTGC, 'TGC')}
            subtitle="Press for more details"
          /> */}
          <View>
            <Text style={styles.detail}>
              {this.renderTitle(attemptTGC, 'TGC')}
            </Text>
            <Text style={styles.MoreDetail}>Press for more details</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('TGC')}>
            <Card.Cover source={require('../../images/TGCEligibility.jpg')} />
          </TouchableOpacity>
        </Card>
      );
    }
  };

  renderSSC = attemptSSC => {
    if (attemptSSC <= 0) {
      return (
        <View>
          <Text style={styles.detail}>
            You do not have any SSC (Tech) attempts left.
          </Text>
          {/*  <Card.Title title="You do not have any SSC(Tech) attempts left" /> */}
        </View>
      );
    } else {
      return (
        <Card style={styles.Card}>
          {/*  <Card.Title
            title={this.renderTitle(attemptSSC, 'SSC(Tech)')}
            subtitle="Press for more details"
          /> */}
          <View>
            <Text style={styles.detail}>
              {this.renderTitle(attemptSSC, 'SSC(Tech)')}
            </Text>
            <Text style={styles.MoreDetail}>Press for more details</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SSC')}>
            <Card.Cover source={require('../../images/SSCEligibility.jpg')} />
          </TouchableOpacity>
        </Card>
      );
    }
  };

  renderJAG = attemptJAG => {
    if (attemptJAG <= 0) {
      return (
        <View>
          <Text style={styles.detail}>
            You do not have any JAG attempts left.
          </Text>
          {/*   <Card.Title title="You do not have any JAG attempts left" /> */}
        </View>
      );
    } else {
      return (
        <Card style={styles.Card}>
          {/*  <Card.Title
            title={this.renderTitle(attemptJAG, 'JAG')}
            subtitle="Press for more details"
          /> */}
          <View>
            <Text style={styles.detail}>
              {this.renderTitle(attemptJAG, 'JAG')}
            </Text>
            <Text style={styles.MoreDetail}>Press for more details</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('JAG')}>
            <Card.Cover source={require('../../images/JAGEligibility.jpg')} />
          </TouchableOpacity>
        </Card>
      );
    }
  };

  renderNA = attemptNDA => {
    if (attemptNDA <= 0) {
      return (
        <View>
          <Text style={styles.detail}>
            You do not have any Naval Academy attempts left.
          </Text>
          {/*     <Card.Title title="You do not have any Naval Academy attempts left" /> */}
        </View>
      );
    } else {
      return (
        <Card style={styles.Card}>
          {/*  <Card.Title
            title={this.renderTitle(attemptNDA, 'NA')}
            subtitle="Press for more details"></Card.Title> */}
          <View>
            <Text style={styles.detail}>
              {this.renderTitle(attemptNDA, 'NA')}
            </Text>
            <Text style={styles.MoreDetail}>Press for more details</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('NDA')}>
            <Card.Cover source={require('../../images/NAEligibility.jpg')} />
          </TouchableOpacity>
        </Card>
      );
    }
  };

  renderTesNavy = attemptTES => {
    if (attemptTES <= 0) {
      return (
        <View>
          <Text style={styles.detail}>
            You do not have any 10+2(BTech) entry attempts left.
          </Text>
          {/*  <Card.Title title="You do not have any !0+2(Btech) entry attempts left" /> */}
        </View>
      );
    } else {
      return (
        <Card style={styles.Card}>
          {/*  <Card.Title
            title={this.renderTitle(attemptTES, '10+2(BTech)')}
            subtitle="Press for more details"
          /> */}
          <View>
            <Text style={styles.detail}>
              {this.renderTitle(attemptTES, '10+2(BTech)')}
            </Text>
            <Text style={styles.MoreDetail}>Press for more details</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('TES')}>
            <Card.Cover
              source={require('../../images/TESNavyEligibility.jpg')}
            />
          </TouchableOpacity>
        </Card>
      );
    }
  };

  renderCdsIna(attemptCdsPC) {
    if (attemptCdsPC <= 0) {
      return (
        <View>
          <Text style={styles.detail}>
            You do not have any CDS (INA) attempts left.
          </Text>
          {/*  <Card.Title title="You do not have any CDS (INA) attempts left" /> */}
        </View>
      );
    } else {
      return (
        <Card style={styles.Card}>
          {/* <Card.Title
            title={this.renderTitle(attemptCdsPC, 'CDS(INA)')}
            subtitle="Press for more details"></Card.Title> */}
          <View>
            <Text style={styles.detail}>
              {this.renderTitle(attemptCdsPC, 'CDS(INA)')}
            </Text>
            <Text style={styles.MoreDetail}>Press for more details</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('CDS')}>
            <Card.Cover
              source={require('../../images/CDSINAEligibility.jpg')}
            />
          </TouchableOpacity>
        </Card>
      );
    }
  }

  renderINET = attemptINET => {
    if (attemptINET <= 0) {
      return (
        <View>
          <Text style={styles.detail}>
            You do not have any INET attempts left.
          </Text>
          {/* <Card.Title title="You do not have any INET attempts left" /> */}
        </View>
      );
    } else {
      return (
        <Card style={styles.Card}>
          {/*  <Card.Title
            title={this.renderTitle(attemptINET, 'INET')}
            subtitle="Press for more details"></Card.Title> */}
          <View>
            <Text style={styles.detail}>
              {this.renderTitle(attemptINET, 'INET')}
            </Text>
            <Text style={styles.MoreDetail}>Press for more details</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('INET')}>
            <Card.Cover source={require('../../images/INETEligibility.jpg')} />
          </TouchableOpacity>
        </Card>
      );
    }
  };

  renderUES = attemptUES => {
    if (attemptUES <= 0) {
      return (
        <View>
          <Text style={styles.detail}>
            You do not have any UES attempts left.
          </Text>
          {/* <Card.Title title="You do not have any UES attempts left" /> */}
        </View>
      );
    } else {
      return (
        <Card style={styles.Card}>
          {/*  <Card.Title
            title={this.renderTitle(attemptUES, 'UES')}
            subtitle="Press for more details"></Card.Title> */}
          <View>
            <Text style={styles.detail}>
              {this.renderTitle(attemptUES, 'UES')}
            </Text>
            <Text style={styles.MoreDetail}>Press for more details</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('INET')}>
            <Card.Cover source={require('../../images/UESEligibility.jpg')} />
          </TouchableOpacity>
        </Card>
      );
    }
  };

  renderNavyJAG(attemptJAG) {
    if (attemptJAG <= 0) {
      return (
        <View>
          <Text style={styles.detail}>
            You do not have any JAG attempts left.
          </Text>
          {/*  <Card.Title title="You do not have any JAG attempts left" /> */}
        </View>
      );
    } else {
      return (
        <Card style={styles.Card}>
          {/*  <Card.Title
            title={this.renderTitle(attemptJAG, 'JAG')}
            subtitle="Press for more details"></Card.Title> */}
          <View>
            <Text style={styles.detail}>
              {this.renderTitle(attemptJAG, 'JAG')}
            </Text>
            <Text style={styles.MoreDetail}>Press for more details</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('JAG')}>
            <Card.Cover
              source={require('../../images/JAGNavyEligibility.jpg')}
            />
          </TouchableOpacity>
        </Card>
      );
    }
  }

  renderAFCAT = attemptAFCAT => {
    if (attemptAFCAT <= 0) {
      return (
        <View>
          <Text style={styles.detail}>
            You do not have any JAG attempts left.
          </Text>
          {/*   <Card.Title title="You do not have any JAG attempts left" /> */}
        </View>
      );
    } else {
      return (
        <Card style={styles.Card}>
          {/*   <Card.Title
            title={this.renderTitle(attemptAFCAT, 'AFCAT')}
            subtitle="Press for more details"></Card.Title> */}
          <View>
            <Text style={styles.detail}>
              {this.renderTitle(attemptAFCAT, 'AFCAT')}
            </Text>
            <Text style={styles.MoreDetail}>Press for more details</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('AFCAT')}>
            <Card.Cover source={require('../../images/AFCATEligibility.jpg')} />
          </TouchableOpacity>
        </Card>
      );
    }
  };

  renderCdsAFA = attemptCds => {
    if (attemptCds <= 0) {
      return (
        <View>
          <Text style={styles.detail}>
            You do not have any CDS (AFA) attempts left.
          </Text>
          {/* <Card.Title title="You do not have any CDS(AFA) attempts left" /> */}
        </View>
      );
    } else {
      return (
        <Card style={styles.Card}>
          {/*  <Card.Title
            title={this.renderTitle(attemptCds, 'CDS(AFA)')}
            subtitle="Press for more details"></Card.Title> */}
          <View>
            <Text style={styles.detail}>
              {this.renderTitle(attemptCds, 'CDS(AFA)')}
            </Text>
            <Text style={styles.MoreDetail}>Press for more details</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('CDS')}>
            <Card.Cover
              source={require('../../images/CDSAFAEligibility.jpg')}
            />
          </TouchableOpacity>
        </Card>
      );
    }
  };

  renderAirNCC = attemptNCC => {
    if (attemptNCC <= 0) {
      return (
        <View>
          <Text style={styles.detail}>
            You do not have any NCC (F) attempts left.
          </Text>
          {/*           <Card.Title title="You do not have any NCC(F) left" /> */}
        </View>
      );
    } else {
      return (
        <Card style={styles.Card}>
          {/*  <Card.Title
            title={this.renderTitle(attemptNCC, 'NCC Flying')}
            subtitle="Press for more details"></Card.Title> */}
          <View>
            <Text style={styles.detail}>
              {this.renderTitle(attemptNCC, 'NCC Flying')}
            </Text>
            <Text style={styles.MoreDetail}>Press for more details</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('CDS')}>
            <Card.Cover
              source={require('../../images/NCCAirEligibility.jpg')}
            />
          </TouchableOpacity>
        </Card>
      );
    }
  };

  renderMET = attemptMET => {
    if (attemptMET <= 0) {
      return (
        <View>
          <Text style={styles.detail}>
            You do not have any AFA (Meteorology) attempts left.
          </Text>
          {/*         <Card.Title title="You do not have any AFA (Meteorology) attempts left" /> */}
        </View>
      );
    } else {
      <Card style={styles.Card}>
        {/*  <Card.Title
          title={this.renderTitle(attemptMET, 'AFA (Meteorology)')}
          subtitle="Press for more details"></Card.Title> */}
        <View>
          <Text style={styles.detail}>
            {this.renderTitle(attemptMET, 'AFA (Meteorology)')}
          </Text>
          <Text style={styles.MoreDetail}>Press for more details</Text>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AFCAT')}>
          <Card.Cover source={require('../../images/METEligibility.jpg')} />
        </TouchableOpacity>
      </Card>;
    }
  };

  checkEligibilityAirForce = (age, month, qualification, ncc) => {
    let attemptNDA = 2 * (18.5 - age);
    let attemptAFCAT = 2 * (24 - age);
    let attemptNCC = 2 * (24.5 - age);
    let attemptMET = 2 * (24.5 - age);
    let attemptCdsPC = 2 * (23 - age);

    if (
      attemptNCC <= 0 &&
      attemptNDA <= 0 &&
      attemptCdsPC <= 0 &&
      attemptAFCAT <= 0 &&
      attemptMET <= 0
    ) {
      return (
        <View style={styles.Container}>
          <Card.Title title="Sorry you are not eligible for the armed forces!" />
        </View>
      );
    } else if (age >= 16 && age <= 18.5 && month >= 7 && qualification == 1) {
      return (
        <View style={styles.Container}>{this.renderNDA(attemptNDA + 1)}</View>
      );
    } else if (age >= 16 && age <= 18.5 && month < 7 && qualification == 1) {
      return <View style={styles.Container}>{this.renderNDA(attemptNDA)}</View>;
    } else if (
      age >= 19 &&
      age <= 27 &&
      (qualification == 2 || qualification == 3 || qualification == 4) &&
      month >= 7
    ) {
      if ((age <= 24 && qualification == 2) || qualification == 4) {
        if (ncc) {
          return (
            <View style={styles.Container}>
              {this.renderCdsAFA(attemptCdsPC + 1)}
              {this.renderAFCAT(attemptAFCAT + 1)}
              {this.renderAirNCC(attemptNCC + 1)}
            </View>
          );
        } else {
          return (
            <View style={styles.Container}>
              {this.renderCdsAFA(attemptCdsPC + 1)}
              {this.renderAFCAT(attemptAFCAT + 1)}
            </View>
          );
        }
      } else if (age <= 27 && qualification == 3) {
        if (ncc) {
          return (
            <View style={styles.Container}>
              {this.renderCdsAFA(attemptCdsPC + 1)}
              {this.renderAFCAT(attemptAFCAT + 1)}
              {this.renderMET(attemptMET + 1)}
              {this.renderAirNCC(attemptNCC + 1)}
            </View>
          );
        } else {
          return (
            <View style={styles.Container}>
              {this.renderCdsAFA(attemptCdsPC + 1)}
              {this.renderAFCAT(attemptAFCAT + 1)}
              {this.renderMET(attemptMET + 1)}
            </View>
          );
        }
      }
    } else if (
      age >= 19 &&
      age <= 27 &&
      (qualification == 2 || qualification == 3 || qualification == 4) &&
      month < 7
    ) {
      if ((age <= 24 && qualification == 2) || qualification == 4) {
        if (ncc) {
          return (
            <View style={styles.Container}>
              {this.renderCdsAFA(attemptCdsPC)}
              {this.renderAFCAT(attemptAFCAT)}
              {this.renderAirNCC(attemptNCC)}
            </View>
          );
        } else {
          return (
            <View style={styles.Container}>
              {this.renderCdsAFA(attemptCdsPC)}
              {this.renderAFCAT(attemptAFCAT)}
            </View>
          );
        }
      } else if (age <= 27 && qualification == 3) {
        if (ncc) {
          return (
            <View style={styles.Container}>
              {this.renderCdsAFA(attemptCdsPC)}
              {this.renderAFCAT(attemptAFCAT)}
              {this.renderMET(attemptMET)}
              {this.renderNCC(attemptNCC)}
            </View>
          );
        } else {
          return (
            <View style={styles.Container}>
              {this.renderCdsAFA(attemptCdsPC)}
              {this.renderAFCAT(attemptAFCAT)}
              {this.renderMET(attemptMET)}
            </View>
          );
        }
      }
    } else {
      return (
        <View>
          <Card.Title title="Sorry you have no attempts left!" />
        </View>
      );
    }
  };

  checkEligibilityNavy = (age, month, qualification) => {
    let attemptCdsPC = 2 * (23 - age);
    let attemptUES = 2 * (24 - age);
    let attemptINET = 2 * (24 - age);
    let attemptJAG = 2 * (27 - age);
    let attemptNDA = 2 * (18.5 - age);
    let attemptTES = 19 - age;

    if (
      attemptJAG <= 0 &&
    
      attemptNDA <= 0 &&
      attemptTES <= 0 &&
    attemptUES<=0 &&
    attemptINET<=0 &&
      attemptCdsPC <= 0 
     
    
    ) {
      return (
        <View>
          <Text style={styles.detail}>
            Sorry you are not eligible for the armed forces!
          </Text>
          {/*  <Card.Title title="Sorry you are not eligible for the armed forces!" /> */}
        </View>
      );
    } else if (age >= 16 && age <= 18.5 && month >= 7 && qualification == 1) {
      return (
        <View style={styles.Container}>
          {this.renderNDA(attemptNDA + 1)}
          {this.renderNA(attemptNDA + 1)}
          {this.renderTesNavy(attemptTES + 1)}
        </View>
      );
    } else if (age >= 16 && age <= 18.5 && month < 7 && qualification == 1) {
      return (
        <View style={styles.Container}>
          {this.renderNDA(attemptNDA)}
          {this.renderNA(attemptNDA)}
          {this.renderTesNavy(attemptTES)}
        </View>
      );
    } else if (
      age >= 19 &&
      age <= 27 &&
      (qualification == 2 || qualification == 3 || qualification == 4) &&
      month >= 7
    ) {
      if (age <= 24 && qualification == 2) {
        return (
          <View style={styles.Container}>
            {this.renderCdsIna(attemptCdsPC + 1)}
            {this.renderINET(attemptINET + 1)}
          </View>
        );
      } else if (age <= 27 && qualification == 3) {
        return (
          <View style={styles.Container}>
            {this.renderCdsIna(attemptCdsPC + 1)}
            {this.renderINET(attemptINET + 1)}
            {this.renderUES(attemptUES + 1)}
          </View>
        );
      } else if (age >= 21 && age <= 27 && qualification == 4) {
        return (
          <View style={styles.Container}>
            {this.renderCdsIna(attemptCdsPC + 1)}

            {this.renderINET(attemptINET + 1)}

            {this.renderNavyJAG(attemptJAG + 1)}
          </View>
        );
      } else {
        return (
          <View>
            <Card.Title title="Sorry you have no attempts left!" />
          </View>
        );
      }
    } else if (
      age >= 19 &&
      age <= 27 &&
      (qualification == 2 || qualification == 3 || qualification == 4) &&
      month < 7
    ) {
      if (age <= 24 && qualification == 2) {
        return (
          <View style={styles.Container}>
            {this.renderCdsIna(attemptCdsPC)}
            {this.renderINET(attemptINET)}
          </View>
        );
      } else if (age <= 27 && qualification == 3) {
        return (
          <View style={styles.Container}>
            {this.renderCdsIna(attemptCdsPC)}
            {this.renderINET(attemptINET)}
            {this.renderUES(attemptUES)}
          </View>
        );
      } else if (age >= 21 && age <= 27 && qualification == 4) {
        return (
          <View style={styles.Container}>
            {this.renderCdsIna(attemptCdsPC)}

            {this.renderINET(attemptINET)}

            {this.renderNavyJAG(attemptJAG)}
          </View>
        );
      } else {
        return (
          <View>
            <Card.Title title="Sorry you have no attempts left!" />
          </View>
        );
      }
    }
  };

  checkEligibilityArmy = (age, month, qualification, ncc) => {
    let attemptCdsPC = 2 * (23 - age);
    let attemptCdsSSC = 2 * (24 - age);
    let attemptNCC = 2 * (24.5 - age);
    let attemptTGC = 2 * (24 - age);
    let attemptSSC = 2 * (27 - age);
    let attemptJAG = 2 * (27 - age);
    let attemptNDA = 2 * (18.5 - age);
    let attemptTES = 19 - age;

    if (
      attemptJAG <= 0 &&
      attemptNCC <= 0 &&
      attemptNDA <= 0 &&
      attemptTES <= 0 &&
      attemptTGC <= 0 &&
      attemptCdsPC <= 0 &&
      attemptCdsSSC <= 0 &&
      attemptSSC <= 0
    ) {
      return (
        <View>
          <Text style={styles.detail}>
            Sorry you are not eligible for the armed forces!
          </Text>
          {/*   <Card.Title title="Sorry you are not eligible for the armed forces!" /> */}
        </View>
      );
    } else if (age >= 16 && age <= 18.5 && month >= 7 && qualification == 1) {
      return (
        <View style={styles.Container}>
          {this.renderNDA(attemptNDA + 1)}
          {this.renderTES(attemptTES + 1)}
        </View>
      );
    } else if (age >= 16 && age <= 18.5 && month < 7 && qualification == 1) {
      return (
        <View style={styles.Container}>
          {this.renderNDA(attemptNDA)}
          {this.renderTES(attemptTES)}
        </View>
      );
    } else if (
      age >= 19 &&
      age <= 27 &&
      (qualification == 2 || qualification == 3 || qualification == 4) &&
      month >= 7
    ) {
      if (age <= 24.5 && qualification == 2) {
        if (age <= 24.5 && ncc) {
          return (
            <View style={styles.Container}>
              {this.renderCdsPC(attemptCdsPC + 1)}
              {this.renderCdsSSC(attemptCdsSSC + 1)}
              {this.renderNCC(attemptNCC + 1)}
            </View>
          );
        } else if (age <= 24) {
          return (
            <View style={styles.Container}>
              {this.renderCdsPC(attemptCdsPC + 1)}
              {this.renderCdsSSC(attemptCdsSSC + 1)}
            </View>
          );
        } else {
          return (
            <View>
              <Card.Title title="Sorry you have no attempts left!" />
            </View>
          );
        }
      } else if (age <= 27 && qualification == 3) {
        if (ncc) {
          return (
            <View style={styles.Container}>
              {this.renderCdsPC(attemptCdsPC + 1)}
              {this.renderCdsSSC(attemptCdsSSC + 1)}
              {this.renderNCC(attemptNCC + 1)}
              {this.renderTGC(attemptTGC + 1)}
              {this.renderSSC(attemptSSC + 1)}
            </View>
          );
        } else {
          return (
            <View style={styles.Container}>
              {this.renderCdsPC(attemptCdsPC + 1)}

              {this.renderCdsSSC(attemptCdsSSC + 1)}
              {this.renderTGC(attemptTGC + 1)}
              {this.renderSSC(attemptSSC + 1)}
            </View>
          );
        }
      } else if (age >= 21 && age <= 27 && qualification == 4) {
        if (ncc) {
          return (
            <View style={styles.Container}>
              {this.renderCdsPC(attemptCdsPC + 1)}

              {this.renderCdsSSC(attemptCdsSSC + 1)}
              {this.renderNCC(attemptNCC + 1)}
              {this.renderJAG(attemptJAG + 1)}
            </View>
          );
        } else {
          return (
            <View style={styles.Container}>
              {this.renderCdsPC(attemptCdsPC + 1)}
              {this.renderCdsSSC(attemptCdsSSC + 1)}
              {this.renderJAG(attemptJAG + 1)}
            </View>
          );
        }
      } else {
        return (
          <View>
            <Card.Title title="Sorry you have no attempts left!" />
          </View>
        );
      }
    } else if (
      age >= 19 &&
      age <= 27 &&
      (qualification == 2 || qualification == 3 || qualification == 4) &&
      month < 7
    ) {
      if (age <= 24.5 && qualification == 2) {
        if (age <= 24.5 && ncc) {
          return (
            <View style={styles.Container}>
              {this.renderCdsPC(attemptCdsPC)}

              {this.renderCdsSSC(attemptCdsSSC)}

              {this.renderNCC(attemptNCC)}
            </View>
          );
        } else if (age <= 24) {
          return (
            <View style={styles.Container}>
              {this.renderCdsPC(attemptCdsPC)}

              {this.renderCdsSSC(attemptCdsSSC)}
            </View>
          );
        } else if (age >= 25 && qualification == 2) {
          return (
            <View>
              <Card.Title title="Sorry you have no attempts left!" />
            </View>
          );
        }
      } else if (age <= 27 && qualification == 3) {
        if (ncc) {
          return (
            <View style={styles.Container}>
              {this.renderCdsPC(attemptCdsPC)}

              {this.renderCdsSSC(attemptCdsSSC)}
              {this.renderNCC(attemptNCC)}
              {this.renderTGC(attemptTGC)}
              {this.renderSSC(attemptSSC)}
            </View>
          );
        } else {
          return (
            <View style={styles.Container}>
              {this.renderCdsPC(attemptCdsPC)}
              {this.renderCdsSSC(attemptCdsSSC)}

              {this.renderTGC(attemptTGC)}
              {this.renderSSC(attemptSSC)}
            </View>
          );
        }
      } else if (age >= 21 && age <= 27 && qualification == 4) {
        if (ncc) {
          return (
            <View style={styles.Container}>
              {this.renderCdsPC(attemptCdsPC)}

              {this.renderCdsSSC(attemptCdsSSC)}
              {this.renderNCC(attemptNCC)}
              {this.renderJAG(attemptJAG)}
            </View>
          );
        } else {
          return (
            <View style={styles.Container}>
              {this.renderCdsPC(attemptCdsPC)}
              {this.renderCdsSSC(attemptCdsSSC)}
              {this.renderJAG(attemptJAG)}
            </View>
          );
        }
      } else {
        return (
          <View>
            <Card.Title title="Sorry you have no attempts left!" />
          </View>
        );
      }
    } else {
      return (
        <View style={styles.Container}>
          <Text style={styles.detail}>
            Sorry you are not eligible for the armed forces!
          </Text>
          {/*  <Card.Title title="Sorry! You are not eligible for the armed forces" /> */}
        </View>
      );
    }
  };

  render() {
    const age = this.props.route.params.age;
    const month = this.props.route.params.month;
    const qualification = this.props.route.params.qualification;
    const ncc = this.props.route.params.ncc;
    const service = this.props.route.params.service;

    console.log('Entered Result Page');
    /* console.log(this.props.route.params.age,this.props.route.params.ncc) */
    if (service == 'army') {
      return (
        <View style={styles.Container}>
         
            <Appbar.Header>
              <Appbar.BackAction onPress={this.backArmy} />
              <Appbar.Content title="Eligibility for Army" />
            </Appbar.Header>
            <ScrollView style={styles.Scroll}>
            {this.checkEligibilityArmy(age, month, qualification, ncc)}
          </ScrollView>
        </View>
      );
    } else if (service == 'navy') {
      return (
        <View style={styles.Container}>
          <ScrollView style={styles.Scroll}>
            <Appbar.Header>
              <Appbar.BackAction onPress={this.backNavy} />
              <Appbar.Content title="Eligibility for Navy" />
            </Appbar.Header>

            {this.checkEligibilityNavy(age, month, qualification, ncc)}
          </ScrollView>
        </View>
      );
    } else if (service == 'air force') {
      return (
        <View style={styles.Container}>
          <ScrollView style={styles.Scroll}>
            <Appbar.Header>
              <Appbar.BackAction onPress={this.backAir} />
              <Appbar.Content title="Eligibility for Air Force" />
            </Appbar.Header>

            {this.checkEligibilityAirForce(age, month, qualification, ncc)}
          </ScrollView>
        </View>
      );
    }
  }
}
/* 
const styles = StyleSheet.create({
  Card: {
    // borderWidth:1,
    margin: '5%',
    backgroundColor: 'ghostwhite',
    elevation: 500,
    shadowColor: '#000000',
  },
  Container: {
    height: '100%',
    backgroundColor: '#fdfefe',
  },
  cardContainer: {
    //  marginTop:'2%',
    elevation: 1,
    borderRadius: 60,
    width: '100%',
  },
  Scroll: {
    backgroundColor: '#fdfefe',
    height: '100%',
    marginBottom: 10,
  },
  Header: {
    height: '15%',
    backgroundColor: '#D6E7ED',
    width: '100%',
    borderColor: '#000000',
    flexDirection: 'row',
    borderWidth: 2,
    // marginBottom:'5%',
    //flex:1
  },
  MenuLogo: {
    width: '15%',
    height: '50%',
    marginTop: '5%',
    marginLeft: '1%',
  },
  Heading: {
    fontStyle: 'normal',
    fontSize: 30,
    fontFamily: 'Comic Sans MS',
    marginTop: '3%',
    marginLeft: '25%',
  },

  Body: {
    backgroundColor: 'white',
    // margin:'10%',
    // marginRight:'5%',
    //flex:0,
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    paddingBottom: '50%',
  },
  logo: {
    marginTop: '0%',
    marginBottom: '10%',
    height: '50%',
    width: '100%',
  },
  Title: {
    textAlign: 'center',
    fontFamily: 'georgia',
    fontSize: 25,
  },
  Info: {
    fontFamily: 'georgia',
    fontSize: 25,
    marginLeft: '2%',
    alignSelf: 'center',
  },
  Button: {
    width: '75%',
    height: '25%',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 3,
    justifyContent: 'center',
    flexDirection: 'column',
    //marginLeft:'25%',
    padding: '1%',
    marginTop: '5%',
  },
  ButtonText: {
    //marginLeft:'17%',
    fontFamily: 'Segoe UI',
    fontStyle: 'italic',
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    alignSelf: 'center',
    width: '35%',
    height: '20%',
    marginBottom: '10%',
  },
  ButtonContainer: {
    marginTop: '45%',
    alignContent: 'center',
  },
}); */

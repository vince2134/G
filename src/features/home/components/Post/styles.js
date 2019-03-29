import { StyleSheet } from 'react-native'
import {
    responsiveWidth,
    responsiveHeight,
    responsiveFontSize,
} from 'react-native-responsive-dimensions'
import { Fonts } from '../../../../utils/fonts'

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: responsiveWidth(3),
        paddingBottom: responsiveWidth(3),
        borderColor: '#BCBABA',
        borderBottomWidth: 0.5,
    },
    button: {},
    leftContainer: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    midContainer: {
        flex: 6,
        flexDirection: 'column',
    },
    rightContainer: {
        flex: 1,
    },
    imageContainer: {
        width: responsiveWidth(13),
        height: responsiveWidth(13),
        borderRadius: responsiveWidth(12),
        borderColor: '#9663EF',
        borderWidth: 1.5,
        marginBottom: responsiveWidth(2),
    },
    distanceText: {
        fontFamily: Fonts.MuliLight,
        fontSize: responsiveFontSize(1.4),
        color: '#9B9B9B',
    },
    nameText: {
        fontFamily: Fonts.MuliBold,
        fontSize: responsiveFontSize(1.8),
        color: '#4A4A4A',
    },
    tagsContainer: {
        flexDirection: 'row',
        marginBottom: responsiveHeight(1.5),
    },
    detailsText: {
        fontFamily: Fonts.MuliLight,
        fontSize: responsiveFontSize(1.5),
        color: '#4A4A4A',
    },
    time: {
        fontFamily: Fonts.MuliLight,
        fontSize: responsiveFontSize(1.5),
        color: '#9B9B9B',
    },
})

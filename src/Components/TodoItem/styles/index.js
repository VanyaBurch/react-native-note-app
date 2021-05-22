import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    infoContainer: {
      flexDirection: 'row'
    },
    textContainer: {
      marginLeft: 15
    },
    icon: {
        marginHorizontal: 5
    },
    iconsContainer: {
      flexDirection: 'row'
    },
    nameText: {
        fontSize: 18,
        marginBottom: 5
    },
    completedNameText: {
      color: '#B9B9BE'
    },
    categoryText: {
        color: '#58595B'
    }
})

export default styles
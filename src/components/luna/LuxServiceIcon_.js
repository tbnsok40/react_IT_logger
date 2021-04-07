import React from 'react';
import LUXServiceIcon from 'luna-rocket/LUXServiceIcon';

const styles = {
    icon: {
        float: "left",
        fontSize: "11px",
        width: 85,
        height: 80,
        textAlign: "center",
        margin: '0 5px'
    },
    title: {
        backgroundColor: "#76b8e8",
        color: "#fff",
        padding: "8px"
    },
    infoDiv: {
        width: "600px",
        height: "200px"
    },
    iconDiv: {
        border: "1px solid #e5e5e5",
        padding: "20px",
        paddingTop: "30px",
    },
    horizontalDescription: {
        paddingRight: '20px'
    }
};

class LUXServiceIconExample extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <LUXServiceIcon type={"sao"}/>
                <span style={styles.horizontalDescription}>small(34x34)</span>

                <LUXServiceIcon type={"sao"} size={"medium"}/>
                <span style={styles.horizontalDescription}>medium(48x48)</span>

                <LUXServiceIcon type={"sao"} size="large"/>
                <span style={styles.horizontalDescription}>large(88x88)</span>
            </div>
        );
    }
}


export default LUXServiceIconExample
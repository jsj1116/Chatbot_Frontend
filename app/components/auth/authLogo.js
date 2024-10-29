import * as React from 'react';
import { View, Image } from 'react-native';

import LogoImage from '../../assets/images/logo.png';

const LogoComponent = () => (
    <View style={{alignItems: 'center'}}>
        <Image
            source={LogoImage}
            resizeMode={'contain'}
            style={{
                width: 300
            }}
        />
    </View>
)

export default LogoComponent;

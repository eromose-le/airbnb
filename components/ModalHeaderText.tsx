import { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Colors from '@/constants/Colors';

const ModalHeaderText = () => {
  const [active, setActive] = useState(0);
  return (
    <View style={{ flexDirection: "row", justifyContent: "center", gap: 15 }}>
      <TouchableOpacity onPress={() => setActive(0)}>
        <View
          style={{
            gap: -10,
          }}
        >
          <Text
            style={{
              fontFamily: "mon-sb",
              fontSize: 18,
              color: active == 0 ? "#000" : Colors.grey,
            }}
          >
            Stays
          </Text>
          <Text
            style={{
              fontFamily: "mon-sb",
              fontSize: 18,
              fontWeight: "bold",
              color: active == 0 ? "#000" : Colors.grey,
              opacity: active == 0 ? 1 : 0,
            }}
          >
            _____
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActive(1)}>
        <View
          style={{
            gap: -10,
          }}
        >
          <Text
            style={{
              fontFamily: "mon-sb",
              fontSize: 18,
              color: active == 1 ? "#000" : Colors.grey,
            }}
          >
            Experiences
          </Text>
          <Text
            style={{
              fontFamily: "mon-sb",
              fontSize: 18,
              fontWeight: "bold",
              color: active == 1 ? "#000" : Colors.grey,
              opacity: active == 1 ? 1 : 0,
            }}
          >
            ___________
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ModalHeaderText;

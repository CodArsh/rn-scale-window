## 📱 `@arsil_malek/rn-scale-window` 



A lightweight utility to scale font sizes, widths, heights, paddings, margins, and more across different screen sizes in React Native.  
Build truly responsive UIs without breaking the design across small to large devices.

######   &nbsp;&nbsp;&nbsp; Support (Android / iOS)

---

## 📦 Installation

```bash
npm install @arsil_malek/rn-scale-window

OR

yarn add @arsil_malek/rn-scale-window
```

## ⚙️ Usage 
``` tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale, fontScale, DEVICE } from '@arsil_malek/rn-scale-window';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Responsive Text!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: scale(20),
    marginTop: verticalScale(40),
  },
  title: {
    fontSize: fontScale(18),
    fontWeight: 'bold',
  },
});

export default App;
```

## 📐Utility Functions

| Function                      | Description                                          | Returns  |
| ----------------------------- | ---------------------------------------------------- | -------- |
| `scale(size)`                 | Scales horizontally based on screen width            | `number` |
| `verticalScale(size)`         | Scales vertically based on screen height             | `number` |
| `moderateScale(size, factor)` | Scales moderately (between default & scaled)         | `number` |
| `fontScale(size)`             | Scales text based on user font scale & accessibility | `number` |

## 🧠 Device Info

| Property               | Type      | Description                     |
| ---------------------- | --------- | ------------------------------- |
| `DEVICE.width`         | `number`  | Screen width                    |
| `DEVICE.height`        | `number`  | Screen height                   |
| `DEVICE.isTablet`      | `boolean` | Detects if device is tablet     |
| `DEVICE.isSmallDevice` | `boolean` | Detects very small screen sizes |

## 📝 License
MIT @copyright 2025 Arsil Malek
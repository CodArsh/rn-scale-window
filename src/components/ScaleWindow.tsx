import { Dimensions, PixelRatio, Platform } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Reference values based on standard device (e.g., iPhone 11: 375 x 812)
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

const scale = (size: number): number => (SCREEN_WIDTH / BASE_WIDTH) * size;
const verticalScale = (size: number): number => (SCREEN_HEIGHT / BASE_HEIGHT) * size;
const moderateScale = (size: number, factor: number = 0.5): number =>
  size + (scale(size) - size) * factor;

const fontScale = (size: number): number => size * PixelRatio.getFontScale();

const isSmallDevice = SCREEN_WIDTH < 360;
const isLargeDevice = SCREEN_WIDTH > 768;
const isTablet = Platform.OS === 'ios'
  ? SCREEN_WIDTH >= 768 && SCREEN_HEIGHT >= 1024
  : SCREEN_WIDTH >= 600;

const DEVICE = {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
  isSmallDevice,
  isLargeDevice,
  isTablet,
};

export {
  scale,
  verticalScale,
  moderateScale,
  fontScale,
  DEVICE,
};

export default ({ config }) => ({
	...config,
	name: 'exponativewindtemplatestorybook',
	slug: 'expo-template-blank-typescript',
	version: '1.0.0',
	orientation: 'portrait',
	icon: './assets/icon.png',
	extra: {
		storybookEnabled: true,
		'eas': {
			projectId: 'fd290ea5-8636-4cf1-965d-0da59c604ee0',
		},
	},
	splash: {
		image: './assets/splash.png',
		resizeMode: 'contain',
		backgroundColor: '#ffffff',
	},
	updates: {
		fallbackToCacheTimeout: 0,
	},
	assetBundlePatterns: ['**/*'],
	ios: {
		supportsTablet: true,
		bundleIdentifier: 'com.exponative.windtemplatestorybook',
		'infoPlist': {
			'ITSAppUsesNonExemptEncryption': false,
		},
	},
	android: {
		adaptiveIcon: {
			foregroundImage: './assets/adaptive-icon.png',
			backgroundColor: '#FFFFFF',
		},
	},
	web: {
		favicon: './assets/favicon.png',
	},
	'updates': {
		'url': 'https://u.expo.dev/fd290ea5-8636-4cf1-965d-0da59c604ee0',
	},
	'runtimeVersion': {
		'policy': 'appVersion',
	},
});

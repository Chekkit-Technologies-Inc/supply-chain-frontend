import OneSignal from 'react-onesignal';

export default async function runOneSignal(userId) {
  await OneSignal.init({ appId: '6e42f4c6-de4b-4989-8080-214c7f9f2a09', allowLocalhostAsSecureOrigin: true });
  OneSignal.setExternalUserId(userId);
  OneSignal.showSlidedownPrompt();
}

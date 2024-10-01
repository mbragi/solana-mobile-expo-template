import { ProfileFeature } from "@/components/profile/profile-feature";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Tab() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ProfileFeature />
    </SafeAreaView>
  )
}

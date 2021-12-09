import { GroupsProvider } from "./groups";
import { HabitsProvider } from "./habits";
import { UserProvider } from "./users";
import { AuthenticatedProvider } from "./authenticated";

const Providers = ({ children }) => {
  return (
    <GroupsProvider>
      <HabitsProvider>
        <UserProvider>
          <AuthenticatedProvider>{children}</AuthenticatedProvider>
        </UserProvider>
      </HabitsProvider>
    </GroupsProvider>
  );
};

export default Providers;

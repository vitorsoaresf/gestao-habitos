import { GroupsProvider } from "./groups";

const Providers = ({ children }) => {
  return <GroupsProvider>{children}</GroupsProvider>;
};

export default Providers;

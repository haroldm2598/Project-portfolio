import { createContext, useContext } from 'react';

const ProjectButtonContext = createContext(null);

function useProjectButton() {
	return useContext(ProjectButtonContext);
}

export default useProjectButton;

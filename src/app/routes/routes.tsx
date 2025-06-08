import { createBrowserRouter } from "react-router";
import {
    ClubPage,
    CommunityPage,
    CoursesPage,
    EditProfilePage,
    HelpPage,
    ProfilePage,
    SkillPage,
    ReferralPage,
    HomePage,
} from '../../pages';
import { Layout } from '../layout';

export const routes = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            { index: true, Component: HomePage },
            { path: 'courses', Component: CoursesPage },
            { path: 'skill', Component: SkillPage },
            { path: 'club', Component: ClubPage },
            { path: 'referral', Component: ReferralPage },
            { path: 'profile', children: [
                {
                    path: 'my',
                    children: [
                        {
                            index: true,
                            Component:ProfilePage
                        }, 
                        {
                            path: 'edit',
                            Component: EditProfilePage
                        }
                    ]
                }
            ]},
            { path: 'community', Component: CommunityPage },
            { path: 'help', Component: HelpPage }
        ]
    }
])
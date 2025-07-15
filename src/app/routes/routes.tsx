import { createBrowserRouter } from "react-router";
import { ReferralPage, EditProfilePage, ProfilePage } from '@pages/user';
import { HomePage } from '@pages/homePage';
import { HelpPage } from '@pages/help';
import { CoursesPage } from '@pages/course';
import { ClubPage, CommunityPage } from "@pages/community";
import { SkillPage } from '@pages/skill';
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
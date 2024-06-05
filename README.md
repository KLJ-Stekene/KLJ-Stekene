# KLJ Stekene - The Website

The purpose of this website and project is to create a centralized platform where members, leaders, parents, sponsors, supporters, and others can find all relevant information. This platform is designed to eventually replace or supplement all existing channels of communication (currently it is intended to supplement until everything is fully functional).

## Local Development Setup

### Prerequisites

- [Fast Node Manager (FNM)](https://fnm.vercel.app) (Not yet required, but will be in the future)
- [NodeJS](https://nodejs.org/) (Check the `package.json` for the required version)
- [NPM](https://www.npmjs.com/) or an equivalent package manager (Check the `package.json` for the required versions)
- [Docker Desktop](https://docs.docker.com/desktop/)

### Initial Setup

```sh
npx supabase start
npm run dev
```

> [!WARNING]
> This setup process is subject to change. For example, it may change if the repository is converted to a turbo-repo.


## KLJ Stekene - URLs To-Do List

### Homepage

- [ ] /         --> Homepage

### Internationalization

- [ ] /[LANG]/  --> i18n - Language selection

### Account

- [ ] /account/  --> General information and settings for members, parents, and supporters.
- [ ] /account/authentication/  --> Login settings: email, password, 2FA, passkey?
- [ ] /account/billing/  --> Where invoices, outstanding bills, etc., should be sent.
- [ ] /account/invoices/  --> Outstanding and past bills/payments.
- [ ] /account/memberships/  --> Enrolled groups: age groups, activities, sponsors, and more.

### Activities

- [ ] /activities/  --> A list of activities for age groups (visible only to members, leaders, and parents).
- [ ] /activities/?filters  --> Filter by age groups, time periods, and more.
- [ ] /activities/[UUID]/  --> View activity details: MDX message, registrations, leaders, linked to an event?, abnormal hours, and more.

### Events

- [ ] /events/  --> A list of all events organized by KLJ Stekene. Both private and public (Private is only visible to the designated target group).
- [ ] /events/?filters  --> Filter the list of events.
- [ ] /events/[UUID]/  --> All information about a specific event + visible information for the board + volunteer registrations + etc.

### Sponsors

- [ ] /sponsors/  --> A list of all sponsors.
- [ ] /sponsors/?filters  --> Filter by: package/amount, event, name, and more.
- [ ] /sponsors/[UUID]/  --> Show sponsor information, which events, and the amounts they have contributed.

### Contact

- [ ] /contact/  --> A list of all communication forms: working groups with an email, individual board members, per event.
- [ ] /contact/governance/  --> A list of board members.
- [ ] /contact/governance/?filters  --> Filter the list by name, working group, event...
- [ ] /contact/governance/[UUID]/  --> A specific board member: email, working groups, events, tasks, age groups.
- [ ] /contact/committees/  --> A list of working groups and task groups within KLJ Stekene and the events.
- [ ] /contact/committees/?filters  --> Filter by leaders, events, and more.

### Dashboard

- [ ] /dashboard/  --> A dashboard for leaders to manage everything. This homepage contains nothing specific (select something message).

#### People Management

- [ ] /dashboard/people/  --> A list of all people connected with KLJ Stekene: members, parents, sponsor contacts, and more.
- [ ] /dashboard/people/?filters  --> Filter by members, activities, and more.
- [ ] /dashboard/people/[UUID]/  --> Show a person's information, depending on the form of connection, a different menu is shown.
- [ ] /dashboard/people/[UUID]/edit/  --> Edit a person's information.

#### Activities Management

- [ ] /dashboard/activities/  --> A list of activities.
- [ ] /dashboard/activities/?filters  --> Filter by age group.
- [ ] /dashboard/activities/[UUID]/  --> Show all information about an activity, but directly editable.

> [!NOTE]
> More to come!
# [Black Dashboard Django](https://www.creative-tim.com/product/black-dashboard-django) [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter)](https://twitter.com/home?status=Material%20Dashboard,%20a%20free%20Material%20Bootstrap%204%20Admin%20Template%20%E2%9D%A4%EF%B8%8F%20https%3A//bit.ly/2Lyat1Y%20%23bootstrap%20%23material%20%23design%20%23developers%20%23freebie%20%20via%20%40CreativeTim)

 ![version](https://img.shields.io/badge/version-1.0.1-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/black-dashboard-django.svg?maxAge=2592000)](https://github.com/creativetimofficial/black-dashboard-django/issues?q=is%3Aopen+is%3Aissue) [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/black-dashboard-django.svg?maxAge=2592000)](https://github.com/creativetimofficial/black-dashboard-django/issues?q=is%3Aissue+is%3Aclosed) [![Join the chat at https://gitter.im/NIT-dgp/General](https://badges.gitter.im/NIT-dgp/General.svg)](https://gitter.im/creative-tim-general/Lobby) [![Chat](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/haJ7ErsNY3)

Open-source **[Django Template](https://www.creative-tim.com/templates/django)** crafted on top of **Black Dashboard**, a popular Bootstrap 4 design. Start your development with a modern, dark-themed Bootstrap 4 Admin template for Django. It features a huge number of components built to fit together and look fantastic. If you want to code faster, with a smooth workflow, then you should try this template carefully developed with Django, a well-known Python Framework.

> NOTE: Starter provided in partnership with [App-Generator](https://app-generator.dev/), an open-source platform for developers

<br />

## Features: 

- Simple, Easy-to-Extend codebase
- Black Dashboard
- [Bootstrap](https://app-generator.dev/docs/templates/bootstrap.html) CSS Styling 
- Dynamic Tables - read [docs](https://app-generator.dev/docs/developer-tools/dynamic-datatables.html)
- Dynamic API - read [docs](https://app-generator.dev/docs/developer-tools/dynamic-api.html)
- Charts
- [Django CLI Package](https://app-generator.dev/docs/developer-tools/django-cli/index.html)
    - [Commit/rollback Git Changes](https://app-generator.dev/docs/developer-tools/django-cli/git-interface.html)
    - `Backup & restore DB`
    - [Interact with Django Core](https://app-generator.dev/docs/developer-tools/django-cli/query-django.html)
    - `Manage Environment`
    - `Manage Dependencies`
- Session-based Authentication, Password recovery
- DB Persistence: SQLite (default), can be used with MySql, PgSql
- Docker, CI/CD for Render
- Vite for assets management 

<br />

[![Black Dashboard Django - Admin Dashboard coded in Django.](https://user-images.githubusercontent.com/51070104/214890715-43a927f1-afea-4f09-9da8-965ba8102b07.png)](https://www.creative-tim.com/product/black-dashboard-django)

<br />

## Table of Contents

* [Demo](#demo)
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Reporting Issues](#reporting-issues)
* [Technical Support or Questions](#technical-support-or-questions)
* [Licensing](#licensing)
* [Useful Links](#useful-links)

<br />

## Demo

> To authenticate use the default credentials ***test / Pass12__*** or create a new user on the **registration page**.

- **Black Dashboard Django** [Login Page](https://www.creative-tim.com/live/black-dashboard-django)

<br />

## Quick start

> UNZIP the sources or clone the repository. After getting the code, open a terminal and navigate to the working directory, with product source code.

```bash
$ git clone https://github.com/creativetimofficial/black-dashboard-django.git
$ cd black-dashboard-django
```

<br />

### 👉 Set Up for `Unix`, `MacOS` 

> Install modules via `VENV`  

```bash
$ virtualenv env
$ source env/bin/activate
$ pip3 install -r requirements.txt
```

<br />

> Set Up Database

```bash
$ python manage.py makemigrations
$ python manage.py migrate
```

<br />

> Start the app

```bash
$ python manage.py runserver
```

At this point, the app runs at `http://127.0.0.1:8000/`. 

> Note: To use the app, please access the registration page and create a new user. After authentication, the app will unlock the private pages.

<br />

## Documentation

The documentation for the **Black Dashboard Django** is hosted at our [website](https://demos.creative-tim.com/black-dashboard-django/docs/1.0/getting-started/getting-started-django.html).

<br />

## File Structure
Within the download you'll find the following directories and files:

```bash
< PROJECT ROOT >
   |
   |-- config/                            
   |    |-- settings.py                  # Project Configuration  
   |    |-- urls.py                      # Project Routing
   |
   |-- apps/
   |    |-- charts                        
   |    |-- dyn_api                      # APP Routing
   |    |-- dyn_dt                       # APP Models 
   |    |-- pages                        # Tests  
   |     
   |-- requirements.txt                  # Project Dependencies
   |
   |-- env.sample                        # ENV Configuration (default values)
   |-- manage.py                         # Start the app - Django default start script
   |
   |-- ************************************************************************
```

<br />

## Deploy on [Render](https://render.com/)

- Create a Blueprint instance
  - Go to https://dashboard.render.com/blueprints this link.
- Click `New Blueprint Instance` button.
- Connect your `repo` which you want to deploy.
- Fill the `Service Group Name` and click on `Update Existing Resources` button.
- After that your deployment will start automatically.

At this point, the product should be LIVE.

<br />

## Resources

- Demo: <https://www.creative-tim.com/live/black-dashboard-django>
- Download Page: <https://www.creative-tim.com/product/black-dashboard-django>
- Documentation: <https://demos.creative-tim.com/black-dashboard-django/docs/1.0/getting-started/getting-started-django.html>
- License Agreement: <https://www.creative-tim.com/license>
- Support: <https://www.creative-tim.com/contact-us>
- Issues: [Github Issues Page](https://github.com/creativetimofficial/black-dashboard-django/issues)

<br />

## Reporting Issues

We use GitHub Issues as the official bug tracker for the **Black Dashboard Django**. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the **Black Dashboard Django**. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser-specific, so specifying in what browser you encountered the issue might help.

<br />

## Support

Being a product that is actively supported and improved, feel free to contact us using these funnels: 

- **Creative-Tim** [Discord](https://discord.gg/haJ7ErsNY3) Server - for general product assistance and UI/UX
- **App Generator** [Discord](https://discord.gg/fZC6hup) Server - for **Django specific questions** and assistance. 

<br />

## Licensing

- Copyright 2019 - present [Creative Tim](https://www.creative-tim.com/)
- Licensed under [Creative Tim EULA](https://www.creative-tim.com/license)

<br />

## Useful Links

- [More products](https://www.creative-tim.com/bootstrap-themes) from Creative Tim
- [Tutorials](https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w)
- [Freebies](https://www.creative-tim.com/bootstrap-themes/free) from Creative Tim
- [Affiliate Program](https://www.creative-tim.com/affiliates/new) (earn money)

<br />

## Social Media

- Twitter: <https://twitter.com/CreativeTim>
- Facebook: <https://www.facebook.com/CreativeTim>
- Dribbble: <https://dribbble.com/creativetim>
- Instagram: <https://www.instagram.com/CreativeTimOfficial>

<br />

## [PRO Version](https://www.creative-tim.com/product/black-dashboard-pro-django)

> For more components, pages and priority on support, feel free to take a look at this amazing starter:

Black Dashboard is a premium [Bootstrap Template](https://app-generator.dev/docs/templates/bootstrap.html) Design now available for download in Django. Made of hundred of elements, designed blocks, and fully coded pages, Black Dashboard PRO is ready to help you create stunning websites and web apps.

- Simple, Easy-to-Extend Codebase
- Soft UI Dashboard Design - PRO Version Integration
- Dynamic DataTables - [Generate Data Tables with Django](https://app-generator.dev/docs/developer-tools/dynamic-datatables.html) (no coding)
- Dynamic API - [Generate API Endpoints with Django](https://app-generator.dev/docs/developer-tools/dynamic-api.html) (no coding)
- Charts via ApexCharts.js
- Media Files Manager
- Async Tasks (celery)
- [CLI Tools for Django](https://app-generator.dev/docs/developer-tools/django-cli/index.html) - migrate DB, manage GIT commits and   
- Session-based Authentication, Password recovery
- DB Persistence: SQLite (default), can be used with MySql, PgSql
- Docker 
- CI/CD integration for [Render](https://app-generator.dev/docs/deployment/render/index.html) 
- [Vite](https://app-generator.dev/docs/technologies/vite/index.html) for assets management 

<br />

![Django Black Dashboard PRO - Premium Starter crafted by AppSeed and Creative-Tim.](https://user-images.githubusercontent.com/51070104/214872728-230a9955-d391-4900-b352-d68960dbd2c4.png)

<br />

---
[Black Dashboard Django](https://www.creative-tim.com/product/black-dashboard-django) - Provided by [Creative Tim](https://www.creative-tim.com/) and [App-Generator](https://app-generator.dev/).

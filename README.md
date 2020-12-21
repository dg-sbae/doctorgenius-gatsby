# doctorgenius-gatsby(Doctorgenius.com)

The website for Doctor Genius

## Features

---

- SEO optimized home, service, and contact pages.
- "The Study": Blogs generated from our Wordpress site
- Smart forms to inquery with the DG team.

## Getting Started

---

For development, you will only need Node.js installed on your environement.

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    $ npm --version

### Install

    $ git clone https://github.com/doctor-genius/doctorgenius-gatsby.git doctorgenius-gatsby
    $ cd doctorgenius-gatsby
    $ npm install

### Build

    $ gatsby build

### Start

    $ gatsby develop

The application is now viewable at [http://localhost:8000/](http://localhost:8000/)

## Deployment

    The application is deployed directly to doctorgenius.com via SFTP.

    DEV builds should update all the contact form destination endpoints to: 
        nodetest-dev.dgplex.com
        (possibly) also doctorgenius-wordpress.dgplex.com -> doctorgenius-wordpress.dgpd3v.com

    LIVE builds use
        nodetest.dgplex.com
        doctorgenius-wordpress.dgplex.com

        ** Inline images for blogs must currently be grabbed by hand from the remote uploads folder

---

## Questions / Issue Reporting

---

- For any questions please email fullstack@doctogenius.com

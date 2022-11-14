# social-network-api

## Description

A backend of API for a social network that use MongoDB that benefits for website to handle the large amounts of unstructured data, Express.js for routing and Mongoose ODM.

## Acceptance-Criteria:

- When you enter the command to invoke the application then the server is started and the Mongoose models are synced to the MongoDB database.
- Testing API GET routes in Insomnia Core for users and thoughts return the data for each of these routes in a formatted JSON
- Testing API POST, PUT, and DELETE routes in Insomnia Core are able to successfully create, update, and delete users and thoughts

- Testing API POST and DELETE routes in Insomnia Core are able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list.

## Table of Contents

- [Description](#Description)
- [Acceptance-Criteria](#Acceptance-Criteria)
- [Installation](#Installation)
- [Usage](#Usage)
- [Tests](#tests)
- [Contributing](#Contributing)
- [Questions](#Questions)
- [License](#License)

## Installation

- Requires the npm express and mongoose packages:

      ```bash
      npm i express
      npm i mongoose
      ```

## Usage

--> **[Walkthrough Video](https://watch.screencastify.com/v/Bme4FLYjJSrwFDhjf5rq)** <--

Run the following command at the root of your project.

1. type `npm start` to start server.
2. To view all or each data, add, edit, or delete data, please use Insomnia app.

## Tests:

Testing restful API calls with Insomnia Core

---

**`/api/users`**

- `GET` all users
- `POST` a new user:
  ```json
  // example data
  {
    "username": "lernantino",
    "email": "lernantino@gmail.com"
  }
  ```

---

**`/api/users/:userid`**

- `GET` a single user by its `_id`
- `PUT` to update a user by its `_id`
- `DELETE` to remove user by its `_id` included user's associated thoughts

---

**`/api/users/:userId/friends/:friendId`**

- `POST` to add a new friend to a user's friend list
- `DELETE` to remove a friend from a user's friend list

---

**`/api/thoughts`**

- `GET` to get all thoughts
- `POST` to create a new thought
  ```json
  // example data
  {
    "thoughtText": "Here's a cool thought...",
    "username": "lernantino",
    "userId": "5edff358a0fcb779aa7b118b"
  }
  ```

---

**`/api/thoughts/:thoughtId`**

- `GET` to get a single thought by its `_id`
- `PUT` to update a thought by its `_id`
- `DELETE` to remove a thought by its `_id`

---

**`/api/thoughts/:thoughtId/reactions`**

- `POST` to create a reaction
  ```json
  // example data
  {
    "reactionBody": "Hell Yeah!!",
    "username": "lernantino"
  }
  ```

---

**`/api/thoughts/:thoughtId/reactions/:reactionId`**

- `DELETE` remove a reaction by the `reactionId`

## Contributing

1. Fork this repository
2. Create a new branch
3. Commit changes on your branch
4. Push your changes
5. Create a new pull request

## Questions

If you have any question or would like to report the issues in this project, please feel free to contact me at email_to_be_annouced@domain.com

## License

This project is license under the [MIT](./LICENSE)

&copy; 2022 Joseph Lara

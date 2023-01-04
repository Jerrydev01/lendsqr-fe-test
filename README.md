# About The Project

<h2 align="center">
 <a href="https://lendsqr-fe-test-jerrydev01.vercel.app/" target="_blank">https://lendsqr-fe-test-jerrydev01.vercel.app/</a>
</h2>

<div align="center">
  <img alt="Logo" src="https://github.com/Jerrydev01/lendsqr-fe-test/blob/master/src/assets/lendsqr.png" width="100%" />
</div>

# Lendsqr Test

This is a front End Development project that was set up to by Lendsqr a Lending-as-a-Service solution which powers lenders to launch in the shortest possible time, and scale their digital lending business across multiple channels, at the lowest cost.

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm

  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can clone this project to your local Machine and setting up your app. This doesn't rely on any external dependencies or services._

1. Get a free API Key at NOT NEEDED
2. Clone the repo

   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```

3. Install NPM packages

   ```sh
   npm install
   ```

## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                    |
| :-------- | :------- | :----------------------------- |
| `api_key` | `string` | **Not Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

- [React Icons](https://react-icons.github.io/react-icons/search)

## Authors

- [@jerrydev01](https://github.com/Jerrydev01)

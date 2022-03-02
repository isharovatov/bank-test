export const TODO_TYPE = {
  AUTH: {
    START: "auth/pending",
    SUCCESS: "auth/fulfilled",
    ERROR: "auth/rejected"
  },
  GET_TOKEN: {
    START: "get_token/pending",
    SUCCESS: "get_token/fulfilled",
    ERROR: "get_token/rejected"
  },
  GET_ID: {
    START: "get_id/pending",
    SUCCESS: "get_id/fulfilled",
    ERROR: "get_id/rejected"
  },
  GET_UUID: {
    START: "get_uuid/pending",
    SUCCESS: "get_uuid/fulfilled",
    ERROR: "get_uuid/rejected"
  },
  GET_ME: {
    START: "get_me/pending",
    SUCCESS: "get_me/fulfilled",
    ERROR: "get_me/rejected"
  },
  GET_CARDS: {
    START: "get_cards/pending",
    SUCCESS: "get_cards/fulfilled",
    ERROR: "get_cards/rejected"
  },
  CREATE_CARD: {
    START: "create_cards/pending",
    SUCCESS: "create_cards/fulfilled",
    ERROR: "create_cards/rejected"
  },
  GET_OPERATIONS: {
    START: "get_operations/pending",
    SUCCESS: "get_operations/fulfilled",
    ERROR: "get_operations/rejected"
  },
}




import {
  AUTH_ACTIONS as AA,
  CONNECTION_ACTIONS as CA,
  EVENT_ACTIONS as EA,
  PARSER_ACTIONS as XA,
  PRESENCE_ACTIONS as UA,
  RECORD_ACTIONS as RA,
  RPC_ACTIONS as PA,
  TOPIC as T,
} from '../../../src/constants'

export const MESSAGE_SEPERATOR = String.fromCharCode(30) // ASCII Record Seperator 1E
export const MESSAGE_PART_SEPERATOR = String.fromCharCode(31) // ASCII Unit Separator 1F

export const PAYLOAD_ENCODING = {
  JSON: 0x00,
  DEEPSTREAM: 0x01,
}

export const TOPIC = {
  PARSER: { TEXT: 'X', BYTE: T.PARSER },
  CONNECTION: { TEXT: 'C', BYTE: T.CONNECTION },
  AUTH: { TEXT: 'A', BYTE: T.AUTH },
  ERROR: { TEXT: 'X', BYTE: T.ERROR },
  EVENT: { TEXT: 'E', BYTE: T.EVENT },
  RECORD: { TEXT: 'R', BYTE: T.RECORD },
  RPC: { TEXT: 'P', BYTE: T.RPC },
  PRESENCE: { TEXT: 'U', BYTE: T.PRESENCE },
}

export const PARSER_ACTIONS = {
  UNKNOWN_TOPIC: { BYTE: XA.UNKNOWN_TOPIC },
  UNKNOWN_ACTION: { BYTE: XA.UNKNOWN_ACTION },
  INVALID_MESSAGE: { BYTE: XA.INVALID_MESSAGE },
  MESSAGE_PARSE_ERROR: { BYTE: XA.MESSAGE_PARSE_ERROR },
  MAXIMUM_MESSAGE_SIZE_EXCEEDED: { BYTE: XA.MAXIMUM_MESSAGE_SIZE_EXCEEDED },
  ERROR: { BYTE: XA.ERROR },
}

export const CONNECTION_ACTIONS = {
  ERROR: { TEXT: 'E', BYTE: CA.ERROR },
  PING: { TEXT: 'PI', BYTE: CA.PING },
  PONG: { TEXT: 'PO', BYTE: CA.PONG },
  ACCEPT: { TEXT: 'A', BYTE: CA.ACCEPT },
  CHALLENGE: { TEXT: 'CH', BYTE: CA.CHALLENGE },
  CHALLENGE_RESPONSE: { TEXT: 'CHR', BYTE: CA.CHALLENGE_RESPONSE },
  REJECTION: { TEXT: 'REJ', BYTE: CA.REJECT },
  REDIRECT: { TEXT: 'RED', BYTE: CA.REDIRECT },

  CLOSED: { BYTE: CA.CLOSED },
  CLOSING: { BYTE: CA.CLOSING },

  CONNECTION_AUTHENTICATION_TIMEOUT: { BYTE: CA.AUTHENTICATION_TIMEOUT },
  INVALID_MESSAGE: { BYTE: CA.INVALID_MESSAGE },
}

export const AUTH_ACTIONS = {
  ERROR: { TEXT: 'E', BYTE: AA.ERROR },
  REQUEST: { TEXT: 'REQ', BYTE: AA.REQUEST },
  AUTH_SUCCESSFUL: { BYTE: AA.AUTH_SUCCESSFUL, PAYLOAD_ENCODING: PAYLOAD_ENCODING.DEEPSTREAM },
  AUTH_UNSUCCESSFUL: { BYTE: AA.AUTH_UNSUCCESSFUL, PAYLOAD_ENCODING: PAYLOAD_ENCODING.DEEPSTREAM },
  TOO_MANY_AUTH_ATTEMPTS: { BYTE: AA.TOO_MANY_AUTH_ATTEMPTS },

  MESSAGE_PERMISSION_ERROR: { BYTE: AA.MESSAGE_PERMISSION_ERROR },
  MESSAGE_DENIED: { BYTE: AA.MESSAGE_DENIED },
  INVALID_MESSAGE_DATA: { BYTE: AA.INVALID_MESSAGE_DATA },
  INVALID_MESSAGE: { BYTE: AA.INVALID_MESSAGE },
}

export const EVENT_ACTIONS = {
  ERROR: { TEXT: 'E', BYTE: EA.ERROR },
  EMIT: { TEXT: 'EVT', BYTE: EA.EMIT, PAYLOAD_ENCODING: PAYLOAD_ENCODING.DEEPSTREAM },
  SUBSCRIBE: { TEXT: 'S', BYTE: EA.SUBSCRIBE },
  SUBSCRIBE_ACK: { BYTE: EA.SUBSCRIBE_ACK },
  UNSUBSCRIBE: { TEXT: 'US', BYTE: EA.UNSUBSCRIBE },
  UNSUBSCRIBE_ACK: { BYTE: EA.UNSUBSCRIBE_ACK },
  LISTEN: { TEXT: 'L', BYTE: EA.LISTEN },
  LISTEN_ACK: { BYTE: EA.LISTEN_ACK },
  UNLISTEN: { TEXT: 'UL', BYTE: EA.UNLISTEN },
  UNLISTEN_ACK: { BYTE: EA.UNLISTEN_ACK },
  LISTEN_ACCEPT: { TEXT: 'LA', BYTE: EA.LISTEN_ACCEPT },
  LISTEN_REJECT: { TEXT: 'LR', BYTE: EA.LISTEN_REJECT },
  SUBSCRIPTION_FOR_PATTERN_FOUND: { TEXT: 'SP', BYTE: EA.SUBSCRIPTION_FOR_PATTERN_FOUND },
  SUBSCRIPTION_FOR_PATTERN_REMOVED: { TEXT: 'SR', BYTE: EA.SUBSCRIPTION_FOR_PATTERN_REMOVED },

  MESSAGE_PERMISSION_ERROR: { BYTE: EA.MESSAGE_PERMISSION_ERROR },
  MESSAGE_DENIED: { BYTE: EA.MESSAGE_DENIED },
  INVALID_MESSAGE_DATA: { BYTE: EA.INVALID_MESSAGE_DATA },
  MULTIPLE_SUBSCRIPTIONS: { BYTE: EA.MULTIPLE_SUBSCRIPTIONS },
  NOT_SUBSCRIBED: { BYTE: EA.NOT_SUBSCRIBED },
}

export const RECORD_ACTIONS = {
  ERROR: { TEXT: 'E', BYTE: RA.ERROR },
  CREATE: { TEXT: 'CR', BYTE: RA.CREATE },
  READ: { TEXT: 'R', BYTE: RA.READ },
  READ_RESPONSE: { BYTE: RA.READ_RESPONSE, PAYLOAD_ENCODING: PAYLOAD_ENCODING.JSON },
  HEAD: { TEXT: 'HD', BYTE: RA.HEAD },
  HEAD_RESPONSE: { BYTE: RA.HEAD_RESPONSE },
  CREATEANDUPDATE: { TEXT: 'CU', BYTE: RA.CREATEANDUPDATE },
  CREATEANDUPDATE_WITH_WRITE_ACK: { BYTE: RA.CREATEANDUPDATE_WITH_WRITE_ACK },
  CREATEANDPATCH: { BYTE: RA.CREATEANDPATCH },
  CREATEANDPATCH_WITH_WRITE_ACK: { BYTE: RA.CREATEANDPATCH_WITH_WRITE_ACK },
  UPDATE: { TEXT: 'U', BYTE: RA.UPDATE, PAYLOAD_ENCODING: PAYLOAD_ENCODING.JSON },
  UPDATE_WITH_WRITE_ACK: { BYTE: RA.UPDATE_WITH_WRITE_ACK },
  PATCH: { TEXT: 'P', BYTE: RA.PATCH, PAYLOAD_ENCODING: PAYLOAD_ENCODING.DEEPSTREAM },
  PATCH_WITH_WRITE_ACK: { BYTE: RA.PATCH_WITH_WRITE_ACK },
  ERASE: { BYTE: RA.ERASE },
  ERASE_WITH_WRITE_ACK: { BYTE: RA.ERASE_WITH_WRITE_ACK },
  WRITE_ACKNOWLEDGEMENT: { TEXT: 'WA', BYTE: RA.WRITE_ACKNOWLEDGEMENT },
  DELETE: { TEXT: 'D', BYTE: RA.DELETE },
  DELETE_ACK: { BYTE: RA.DELETE_ACK },
  DELETED: { BYTE: RA.DELETED },

  SUBSCRIBEANDHEAD: { BYTE: RA.SUBSCRIBEANDHEAD },
  // SUBSCRIBEANDHEAD_RESPONSE: { BYTE: RA.SUBSCRIBEANDHEAD_RESPONSE },
  SUBSCRIBEANDREAD: { BYTE: RA.SUBSCRIBEANDREAD },
  // SUBSCRIBEANDREAD_RESPONSE: { BYTE: RA.SUBSCRIBEANDREAD_RESPONSE },
  SUBSCRIBECREATEANDREAD: { TEXT: 'CR', BYTE: RA.SUBSCRIBECREATEANDREAD },
  // SUBSCRIBECREATEANDREAD_RESPONSE: { BYTE: RA.SUBSCRIBECREATEANDREAD_RESPONSE },
  SUBSCRIBECREATEANDUPDATE: { BYTE: RA.SUBSCRIBECREATEANDUPDATE },
  // SUBSCRIBECREATEANDUPDATE_RESPONSE: { BYTE: RA.SUBSCRIBECREATEANDUPDATE_RESPONSE },
  SUBSCRIBE: { TEXT: 'S', BYTE: RA.SUBSCRIBE },
  SUBSCRIBE_ACK: { BYTE: RA.SUBSCRIBE_ACK },
  UNSUBSCRIBE: { TEXT: 'US', BYTE: RA.UNSUBSCRIBE },
  UNSUBSCRIBE_ACK: { BYTE: RA.UNSUBSCRIBE_ACK },

  LISTEN: { TEXT: 'L', BYTE: RA.LISTEN },
  LISTEN_ACK: { BYTE: RA.LISTEN_ACK },
  UNLISTEN: { TEXT: 'UL', BYTE: RA.UNLISTEN },
  UNLISTEN_ACK: { BYTE: RA.UNLISTEN_ACK },
  LISTEN_ACCEPT: { TEXT: 'LA', BYTE: RA.LISTEN_ACCEPT },
  LISTEN_REJECT: { TEXT: 'LR', BYTE: RA.LISTEN_REJECT },
  SUBSCRIPTION_HAS_PROVIDER: { TEXT: 'SH', BYTE: RA.SUBSCRIPTION_HAS_PROVIDER },
  SUBSCRIPTION_HAS_NO_PROVIDER: { BYTE: RA.SUBSCRIPTION_HAS_NO_PROVIDER },
  SUBSCRIPTION_FOR_PATTERN_FOUND: { TEXT: 'SP', BYTE: RA.SUBSCRIPTION_FOR_PATTERN_FOUND },
  SUBSCRIPTION_FOR_PATTERN_REMOVED: { TEXT: 'SR', BYTE: RA.SUBSCRIPTION_FOR_PATTERN_REMOVED },

  CACHE_RETRIEVAL_TIMEOUT: { BYTE: RA.CACHE_RETRIEVAL_TIMEOUT },
  STORAGE_RETRIEVAL_TIMEOUT: { BYTE: RA.STORAGE_RETRIEVAL_TIMEOUT },
  VERSION_EXISTS: { BYTE: RA.VERSION_EXISTS },

  HAS: { TEXT: 'H', BYTE: RA.HAS },
  HAS_RESPONSE: { BYTE: RA.HAS_RESPONSE },
  SNAPSHOT: { TEXT: 'SN', BYTE: RA.READ },

  RECORD_LOAD_ERROR: { BYTE: RA.RECORD_LOAD_ERROR },
  RECORD_CREATE_ERROR: { BYTE: RA.RECORD_CREATE_ERROR },
  RECORD_UPDATE_ERROR: { BYTE: RA.RECORD_UPDATE_ERROR },
  RECORD_DELETE_ERROR: { BYTE: RA.RECORD_DELETE_ERROR },
  RECORD_READ_ERROR: { BYTE: RA.RECORD_READ_ERROR },
  RECORD_NOT_FOUND: { BYTE: RA.RECORD_NOT_FOUND },
  INVALID_VERSION: { BYTE: RA.INVALID_VERSION },
  INVALID_PATCH_ON_HOTPATH: { BYTE: RA.INVALID_PATCH_ON_HOTPATH },

  MESSAGE_PERMISSION_ERROR: { BYTE: RA.MESSAGE_PERMISSION_ERROR },
  MESSAGE_DENIED: { BYTE: RA.MESSAGE_DENIED },
  INVALID_MESSAGE_DATA: { BYTE: RA.INVALID_MESSAGE_DATA },
  MULTIPLE_SUBSCRIPTIONS: { BYTE: RA.MULTIPLE_SUBSCRIPTIONS },
  NOT_SUBSCRIBED: { BYTE: RA.NOT_SUBSCRIBED },
}

export const RPC_ACTIONS = {
  ERROR: { BYTE: PA.ERROR },
  REQUEST: { TEXT: 'REQ', BYTE: PA.REQUEST, PAYLOAD_ENCODING: PAYLOAD_ENCODING.DEEPSTREAM },
  ACCEPT: { BYTE: PA.ACCEPT },
  RESPONSE: { TEXT: 'RES', BYTE: PA.RESPONSE, PAYLOAD_ENCODING: PAYLOAD_ENCODING.DEEPSTREAM },
  REJECT: { TEXT: 'REJ', BYTE: PA.REJECT },
  REQUEST_ERROR: { TEXT: 'E', BYTE: PA.REQUEST_ERROR, PAYLOAD_ENCODING: PAYLOAD_ENCODING.DEEPSTREAM },
  PROVIDE: { TEXT: 'S', BYTE: PA.PROVIDE },
  PROVIDE_ACK: { BYTE: PA.PROVIDE_ACK },
  UNPROVIDE: { TEXT: 'US', BYTE: PA.UNPROVIDE },
  UNPROVIDE_ACK: { BYTE: PA.UNPROVIDE_ACK },

  NO_RPC_PROVIDER: { BYTE: PA.NO_RPC_PROVIDER },
  RESPONSE_TIMEOUT: { BYTE: PA.RESPONSE_TIMEOUT },
  ACCEPT_TIMEOUT: { BYTE: PA.ACCEPT_TIMEOUT },
  MULTIPLE_ACCEPT: { BYTE: PA.MULTIPLE_ACCEPT },
  MULTIPLE_RESPONSE: { BYTE: PA.MULTIPLE_RESPONSE },
  INVALID_RPC_CORRELATION_ID: { BYTE: PA.INVALID_RPC_CORRELATION_ID },

  MESSAGE_PERMISSION_ERROR: { BYTE: PA.MESSAGE_PERMISSION_ERROR },
  MESSAGE_DENIED: { BYTE: PA.MESSAGE_DENIED },
  INVALID_MESSAGE_DATA: { BYTE: PA.INVALID_MESSAGE_DATA },
  MULTIPLE_PROVIDERS: { BYTE: PA.MULTIPLE_PROVIDERS },
  NOT_PROVIDED: { BYTE: PA.NOT_PROVIDED },
}

export const PRESENCE_ACTIONS = {
  ERROR: { TEXT: 'E', BYTE: UA.ERROR },
  QUERY_ALL: { BYTE: UA.QUERY_ALL },
  QUERY_ALL_RESPONSE: { BYTE: UA.QUERY_ALL_RESPONSE, PAYLOAD_ENCODING: PAYLOAD_ENCODING.JSON },
  QUERY: { TEXT: 'Q', BYTE: UA.QUERY },
  QUERY_RESPONSE: { BYTE: UA.QUERY_RESPONSE, PAYLOAD_ENCODING: PAYLOAD_ENCODING.JSON },
  PRESENCE_JOIN: { TEXT: 'PNJ', BYTE: UA.PRESENCE_JOIN },
  PRESENCE_LEAVE: { TEXT: 'PNL', BYTE: UA.PRESENCE_LEAVE },
  SUBSCRIBE: { TEXT: 'S', BYTE: UA.SUBSCRIBE },
  SUBSCRIBE_ACK: { BYTE: UA.SUBSCRIBE_ACK },
  UNSUBSCRIBE: { TEXT: 'US', BYTE: UA.UNSUBSCRIBE },
  UNSUBSCRIBE_ACK: { BYTE: UA.UNSUBSCRIBE_ACK },

  SUBSCRIBE_ALL: { BYTE: UA.SUBSCRIBE_ALL },
  SUBSCRIBE_ALL_ACK: { BYTE: UA.SUBSCRIBE_ALL_ACK },
  UNSUBSCRIBE_ALL: { BYTE: UA.UNSUBSCRIBE_ALL },
  UNSUBSCRIBE_ALL_ACK: { BYTE: UA.UNSUBSCRIBE_ALL_ACK },

  INVALID_PRESENCE_USERS: { BYTE: UA.INVALID_PRESENCE_USERS },

  MESSAGE_PERMISSION_ERROR: { BYTE: UA.MESSAGE_PERMISSION_ERROR },
  MESSAGE_DENIED: { BYTE: UA.MESSAGE_DENIED },
  INVALID_MESSAGE_DATA: { BYTE: UA.INVALID_MESSAGE_DATA },
  MULTIPLE_SUBSCRIPTIONS: { BYTE: UA.MULTIPLE_SUBSCRIPTIONS },
  NOT_SUBSCRIBED: { BYTE: UA.NOT_SUBSCRIBED },
}

export const DEEPSTREAM_TYPES = {
  STRING: 'S',
  OBJECT: 'O',
  NUMBER: 'N',
  NULL: 'L',
  TRUE: 'T',
  FALSE: 'F',
  UNDEFINED: 'U',
}

export const TOPIC_BYTE_TO_TEXT = convertMap(TOPIC, 'BYTE', 'TEXT')
export const TOPIC_TEXT_TO_BYTE = convertMap(TOPIC, 'TEXT', 'BYTE')
export const TOPIC_TEXT_TO_KEY = reverseMap(specifyMap(TOPIC, 'TEXT'))
export const TOPIC_BYTE_TO_KEY = reverseMap(specifyMap(TOPIC, 'BYTE'))
export const TOPIC_BYTES = specifyMap(TOPIC, 'BYTE')

export const ACTIONS_BYTE_TO_PAYLOAD = {}
export const ACTIONS_BYTE_TO_TEXT = {}
export const ACTIONS_TEXT_TO_BYTE = {}
export const ACTIONS_BYTES = {}
export const ACTIONS_TEXT_TO_KEY = {}
export const ACTIONS_BYTE_TO_KEY = {}

export const ACTIONS = {
  [TOPIC.PARSER.BYTE]: PARSER_ACTIONS,
  [TOPIC.CONNECTION.BYTE]: CONNECTION_ACTIONS,
  [TOPIC.AUTH.BYTE]: AUTH_ACTIONS,
  [TOPIC.EVENT.BYTE]: EVENT_ACTIONS,
  [TOPIC.RECORD.BYTE]: RECORD_ACTIONS,
  [TOPIC.RPC.BYTE]: RPC_ACTIONS,
  [TOPIC.PRESENCE.BYTE]: PRESENCE_ACTIONS,
}

for (const key in ACTIONS) {
  ACTIONS_BYTE_TO_PAYLOAD[key] = convertMap(ACTIONS[key], 'BYTE', 'PAYLOAD_ENCODING')
  ACTIONS_BYTE_TO_TEXT[key] = convertMap(ACTIONS[key], 'BYTE', 'TEXT')
  ACTIONS_TEXT_TO_BYTE[key] = convertMap(ACTIONS[key], 'TEXT', 'BYTE')
  ACTIONS_BYTES[key] = specifyMap(ACTIONS[key], 'BYTE')
  ACTIONS_TEXT_TO_KEY[key] = reverseMap(specifyMap(ACTIONS[key], 'TEXT'))
  ACTIONS_BYTE_TO_KEY[key] = reverseMap(specifyMap(ACTIONS[key], 'BYTE'))
}

/**
 * convertMap({ a: { x: 1 }, b: { x: 2 }, c: { x : 3 } }, 'x', 'y')
 *  ===
 * { a: { y: 1 }, b: { y: 2 }, c: { y : 3 } }
 */
function convertMap (map, from, to) {
  const result = {}

  for (const key in map) {
    result[map[key][from]] = map[key][to]
  }

  return result
}

/**
 * specifyMap({ a: { x: 1 }, b: { x: 2 }, c: { x : 3 } }, 'x')
 *  ===
 * { a: 1, b: 2, c: 3 }
 */
function specifyMap (map, innerKey) {
  const result = {}

  for (const key in map) {
    result[key] = map[key][innerKey]
  }

  return result
}

/**
 * Takes a key-value map and returns
 * a map with { value: key } of the old map
 */
function reverseMap (map) {
  const reversedMap = {}

  for (const key in map) {
    reversedMap[map[key]] = key
  }

  return reversedMap
}

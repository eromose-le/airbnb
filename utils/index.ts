type State = Record<string, any>;
type Payload = Record<string, any>;
type ActionType = string;

export function log<
  TState extends State,
  TPayload extends Payload,
  TAction extends ActionType
>(_state: TState, _payload: TPayload, _type: TAction) {
  return console.info(
    "\x1b[36m%s\x1b[0m",
    `\n   [STATE]: ${JSON.stringify(
      _state,
      null,
      2
    )} \n \x1b[35m [PAYLOAD]: (${JSON.stringify(
      _payload
    )}) \n \x1b[90m [TYPE]: (${_type}) \n\n`
  );
}

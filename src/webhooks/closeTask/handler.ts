/**
 * This file was generated using 8base CLI.
 *
 * To learn more about writing custom GraphQL resolver functions, visit
 * the 8base documentation at:
 *
 * https://docs.8base.com/8base-console/custom-functions/webhooks
 *
 * To update this functions invocation settings, update its configuration block
 * in the projects 8base.yml file:
 *  functions:
 *    closeTask:
 *      ...
 *
 * Data that is sent to the function can be accessed on the event argument at:
 *  event.data[KEY_NAME]
 *
 * There are two ways to invoke this function locally:
 *
 *  (1) Explicit file mock file path using '-p' flag:
 *    8base invoke-local closeTask -p src/resolvers/closeTask/mocks/request.json
 *
 *  (2) Default mock file location using -m flag:
 *    8base invoke-local closeTask -m request
 *
 *  Add new mocks to this function to test different input arguments. Mocks can easily be generated
 *  the following generator command:
 *    8base generate mock closeTask -m [MOCK_FILE_NAME]
 */
/*
import { FunctionContext, FunctionEvent } from '8base-cli-types';


type WebhookResult = {
  statusCode: number,
  body: string,
};

export default async (
  event: FunctionEvent,
  ctx: FunctionContext,
): Promise<WebhookResult> => {
  const { foo } = JSON.parse(event.body);

  return {
    statusCode: 200,
    body: JSON.stringify({
      result: `Webhook recieved: ${foo}`,
    }),
  };
};
*/


import gql from 'graphql-tag'
import { responseBuilder } from '../utils'
const MUTATION = gql`
  mutation($data: TaskUpdateInput!) {
    taskUpdate(data: $data) {
      id

    }
  }
`
module.exports = async (event, ctx) => {

  let data = event.body

  console.log(typeof data)
  data = JSON.parse(data)

  try {

    const { userUpdate } = await ctx.api.gqlRequest(MUTATION, { data })

    return responseBuilder(200, { message: "success" })
  } catch (e) {

    return responseBuilder(400, { message: e })
  }

}

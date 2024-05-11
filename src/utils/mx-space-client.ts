import {
    PostController,
    CategoryController,
    createClient
} from "@mx-space/api-client";
import { fetchAdaptor } from "@mx-space/api-client/dist/adaptors/fetch";

export default function mxClient() {
    const endpoint = 'https://mx-space.bangdream.moe/api/v2';
    const client = createClient(fetchAdaptor)(endpoint);
    client.injectControllers([
        PostController,
        CategoryController
    ])
    return [client, endpoint];
}

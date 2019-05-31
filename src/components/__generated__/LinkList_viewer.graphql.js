/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Link_link$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type LinkList_viewer$ref: FragmentReference;
declare export opaque type LinkList_viewer$fragmentType: LinkList_viewer$ref;
export type LinkList_viewer = {|
  +allLinks: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: {|
        +$fragmentRefs: Link_link$ref
      |}
    |}>
  |},
  +$refType: LinkList_viewer$ref,
|};
export type LinkList_viewer$data = LinkList_viewer;
export type LinkList_viewer$key = {
  +$data?: LinkList_viewer$data,
  +$fragmentRefs: LinkList_viewer$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "LinkList_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "allLinks",
      "storageKey": "allLinks(last:100,orderBy:\"createdAt_DESC\")",
      "args": [
        {
          "kind": "Literal",
          "name": "last",
          "value": 100
        },
        {
          "kind": "Literal",
          "name": "orderBy",
          "value": "createdAt_DESC"
        }
      ],
      "concreteType": "LinkConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "LinkEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "Link",
              "plural": false,
              "selections": [
                {
                  "kind": "FragmentSpread",
                  "name": "Link_link",
                  "args": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'd2ece7a6730a5b30de8064f8fd2c9877';
module.exports = node;

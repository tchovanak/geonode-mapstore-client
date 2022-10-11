# GeoNode MapStore Client Applications

This pages contain specific configurations and documentation related to the javascript applications only.
## Configuration

The configuration file is located in `client/static/mapstore/configs/localConfig.json` and it exposes specific properties to customize:

### localConfig.json

| property | type | description |  |
| --- | --- | --- | --- |
| `supportedLocales` | {object} |  |  |
| `geoNodeConfiguration` | {object} | contains all the configuration needed to change the theme, filters and navbar structures | [see available properties](#geonode-configuration) |

### GeoNode configuration

localConfig.`geoNodeConfiguration`

| property | type | description |  |
| --- | --- | --- | --- |
| `filters` | {object} | configuration of filter | |
| `filters.order` | {object} | configuration of order dropdown | |
| `filters.order.defaultLabelId` | {string} | label id to use for the order dropdown button | |
| `filters.order.options` | {array} | label id to use for the order dropdown button | [order object entry](#order-object) |
| `filters.extent` | {object} | configuration of extent filter | |
| `filters.extent.layers` | {array} | a list of MapStore layers object used as extent background | |
| `filters.extent.style` | {object} | a MapStore vector style object | |
| `cardsMenu` | {object} | configuration of the menu of resource cards | |
| `cardsMenu.items` | {array} | list of menu item objects, right placement | [menu item object entry](#menu-item-object) |
| `cardOptions` | {object} | configuration of the resource cards dropdown | |
| `cardOptions.items` | {array} | list of menu item objects, dropdown placement | [menu item object entry](#menu-item-object) |
| `filtersForm` | {object} | configuration of the resource cards dropdown | |
| `filtersForm.items` | {array} | list of filter objects, panel placement | [filter object](#filter-object) |

### Order Object

Order object contains properties for an entry of the order dropdown. Configuration:

```js
{
  "labelId": "gnhome.aZ", // message id for the dropdown item
  "value": "title" // value used in the sort filter
}
```
### Menu Item Object

Menu item object contains properties for a list item rendered in a menu. Configuration:

- type link
```js
{
  "labelId": "gnhome.register", // label message id
  "type": "link", // one of 'link', 'dropdown', 'divider' or 'filter'
  "href": "/account/signup/?next=/",
  "badge": "{state.datasetsTotalCount}", // (menu configuration only) counter badge. variable available: datasetsTotalCount, mapsTotalCount,
  "authenticated": true, // true shows the item only when user authenticated while false only for anonymous user, if undefined the item is always visible
  "perms": [], // the value in array define the access to the contents
  "allowedRoles": [] // user roles to access  to the contents

}
```

- type dropdown
```js
{
  "labelId": "gnhome.register", // label message id
  "image": "", //the toogle image
  "type": "dropdown", // one of 'link', 'dropdown', 'divider' or 'filter'
  "authenticated": true, // true shows the item only when user authenticated while false only for anonymous user, if undefined the item is always visible
  "perms": [], // the value in array define the access to the contents
  "allowedRoles": [], // user roles to access  to the contents
  "items": []  // menu items of type link or divider
}
```

- type divider
```js
{
  "type": "divider", // one of 'link', 'dropdown', 'divider' or 'filter'
  "authenticated": true, // true shows the item only when user authenticated while false only for anonymous user, if undefined the item is always visible
  "perms": [], // the value in array define the access to the contents
  "allowedRoles": [], // user roles to access  to the contents
}
```

- type filter
```js
{
  "type": "filter", // one of 'link', 'dropdown', 'divider' or 'filter'
  "id": "landuse", // unique id of the filter
  "labelId": "gnhome.customFilterExample", // label message id
  "authenticated": true, // true shows the item only when user authenticated while false only for anonymous user, if undefined the item is always visible
  "perms": [], // the value in array define the access to the contents
  "allowedRoles": [],  // user roles to access  to the contents
  "query": { // query filter to use
    "filter{regions.name.in}": [
        "Global"
    ]
  }
}
```

### Filter Object

Filter object contains properties for a select input rendered inside the filter form. Configurations:

- type select
  - properties for select input with static options:
  ```js
  {
    "id": "title", // filter id used for the request filter{title.in}=
    "labelId": "gnhome.labelId", // message id for select label
    "placeholderId": "gnhome.placeholderId", // message id for select placeholder
    "type": "select",
    "options": [ // list of string values
        "Title 1",
        "Title 2",
        "Title 3",
        "Title 4"
    ]
  }
  ```

  - properties for select input with suggestions request:
  ```js
  {
    "labelId": "gnhome.resourceTypes", // message id for select label
    "placeholderId": "gnhome.resourceTypesPlaceholder", // message id for select placeholder
    "type": "select",
    "suggestionsRequestKey": "resourceTypes" // available 'resourceTypes', 'categories', 'keywords', 'regions' or 'owners'
  }
  ```
- type group
```js
{
  "type": "group",
  "labelId": "gnhome.customFiltersTitle", // label message id
  "authenticated": true, // true shows the item only when user authenticated while false only for anonymous user, if undefined the item is always visible
  "items": [
    //... list of filter objects excluding type group
  ]
}
```
Filter items supports also the following types from [menu object configuration](#menu-item-object): filter, divider and link.

## Modules

<dl>
<dt><a href="#module_actions/gnresource">actions/gnresource</a></dt>
<dd><p>Actions for GeoNode resource
store information of the resource in use</p>
</dd>
<dt><a href="#module_actions/gnsave">actions/gnsave</a></dt>
<dd><p>Actions for GeoNode save workflow</p>
</dd>
<dt><a href="#module_actions/gnsearch">actions/gnsearch</a></dt>
<dd><p>Actions for GeoNode resource featured items
set new Featured Resources includes data, page, links</p>
</dd>
<dt><a href="#module_epics/datasetcatalog">epics/datasetcatalog</a></dt>
<dd></dd>
<dt><a href="#module_epics/index">epics/index</a></dt>
<dd></dd>
<dt><a href="#module_epics/layersetting">epics/layersetting</a></dt>
<dd></dd>
<dt><a href="#module_epics/visualstyleeditor">epics/visualstyleeditor</a></dt>
<dd></dd>
<dt><a href="#module_plugins/LayerSettings">plugins/LayerSettings</a></dt>
<dd></dd>
<dt><a href="#module_plugins/MediaViewer">plugins/MediaViewer</a></dt>
<dd></dd>
<dt><a href="#module_plugins/Save">plugins/Save</a></dt>
<dd></dd>
<dt><a href="#module_plugins/SaveAs">plugins/SaveAs</a></dt>
<dd></dd>
<dt><a href="#module_plugins/Sync">plugins/Sync</a></dt>
<dd></dd>
<dt><a href="#module_selectors/config">selectors/config</a></dt>
<dd></dd>
<dt><a href="#module_utils/APIUtils">utils/APIUtils</a></dt>
<dd><p>Utilities for api requests</p>
</dd>
<dt><a href="#module_utils/CoordinatesUtils">utils/CoordinatesUtils</a></dt>
<dd><p>Utilities for api requests</p>
</dd>
<dt><a href="#module_utils/FileUtils">utils/FileUtils</a></dt>
<dd></dd>
<dt><a href="#module_utils/MenuUtils">utils/MenuUtils</a></dt>
<dd></dd>
<dt><a href="#module_utils/ResourceUtils">utils/ResourceUtils</a></dt>
<dd></dd>
</dl>

## Constants

<dl>
<dt><a href="#DOWNLOAD_METADATA">DOWNLOAD_METADATA</a></dt>
<dd><p>Sync geostory components with their live resources on geonode</p>
</dd>
<dt><a href="#SYNC_RESOURCES">SYNC_RESOURCES</a></dt>
<dd><p>Sync geostory components with their live resources on geonode</p>
</dd>
<dt><a href="#gnSyncComponentsWithResources">gnSyncComponentsWithResources</a> ⇒ <code>Observable</code></dt>
<dd><p>Sync reources in current geostory or dashboard with their respective sources</p>
</dd>
<dt><a href="#getGeonodeResourceDataFromGeostory">getGeonodeResourceDataFromGeostory</a> ⇒ <code>Array</code></dt>
<dd><p>Get geonode resources from within a Geostory</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#getSyncInfo">getSyncInfo(appType, resourceData, successArr)</a> ⇒ <code>Object</code></dt>
<dd><p>Get resource type and data for state update in sync process</p>
</dd>
<dt><a href="#getNotificationInfo">getNotificationInfo(errors, successes)</a> ⇒ <code>Object</code></dt>
<dd><p>Get notification title, leve, and message for showNotification</p>
</dd>
</dl>

<a name="module_actions/gnresource"></a>

## actions/gnresource
Actions for GeoNode resource
store information of the resource in use


* [actions/gnresource](#module_actions/gnresource)
    * [.resourceLoading()](#module_actions/gnresource.resourceLoading)
    * [.setResource(data)](#module_actions/gnresource.setResource)
    * [.updateResource(data)](#module_actions/gnresource.updateResource)
    * [.editTitleResource(title)](#module_actions/gnresource.editTitleResource)
    * [.editAbstractResource(abstract)](#module_actions/gnresource.editAbstractResource)
    * [.editThumbnailResource(image)](#module_actions/gnresource.editThumbnailResource)
    * [.setResourceType(resourceType)](#module_actions/gnresource.setResourceType)
    * [.resourceError(error)](#module_actions/gnresource.resourceError)
    * [.updateResourceProperties(properties)](#module_actions/gnresource.updateResourceProperties)
    * [.setNewResource()](#module_actions/gnresource.setNewResource)
    * [.setResourceId(id)](#module_actions/gnresource.setResourceId)
    * [.setResourcePermissions(permissions)](#module_actions/gnresource.setResourcePermissions)
    * [.setSelectedDatasetPermissions(permissions)](#module_actions/gnresource.setSelectedDatasetPermissions)
    * [.setFavoriteResource(favorite)](#module_actions/gnresource.setFavoriteResource)
    * [.enableMapThumbnailViewer()](#module_actions/gnresource.enableMapThumbnailViewer)
    * [.setMapThumbnail()](#module_actions/gnresource.setMapThumbnail)

<a name="module_actions/gnresource.resourceLoading"></a>

### actions/gnresource.resourceLoading()
Initialize loading state

**Kind**: static method of [<code>actions/gnresource</code>](#module_actions/gnresource)  
<a name="module_actions/gnresource.setResource"></a>

### actions/gnresource.setResource(data)
Set the resource in the state

**Kind**: static method of [<code>actions/gnresource</code>](#module_actions/gnresource)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | resource data object |

<a name="module_actions/gnresource.updateResource"></a>

### actions/gnresource.updateResource(data)
Set the resource in the state

**Kind**: static method of [<code>actions/gnresource</code>](#module_actions/gnresource)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | resource data object |

<a name="module_actions/gnresource.editTitleResource"></a>

### actions/gnresource.editTitleResource(title)
edit the title resource in the state

**Kind**: static method of [<code>actions/gnresource</code>](#module_actions/gnresource)  

| Param | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | resource |

<a name="module_actions/gnresource.editAbstractResource"></a>

### actions/gnresource.editAbstractResource(abstract)
edit the abstract resource in the state

**Kind**: static method of [<code>actions/gnresource</code>](#module_actions/gnresource)  

| Param | Type | Description |
| --- | --- | --- |
| abstract | <code>string</code> | resource |

<a name="module_actions/gnresource.editThumbnailResource"></a>

### actions/gnresource.editThumbnailResource(image)
edit the image resource in the state

**Kind**: static method of [<code>actions/gnresource</code>](#module_actions/gnresource)  

| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> | resource |

<a name="module_actions/gnresource.setResourceType"></a>

### actions/gnresource.setResourceType(resourceType)
Set the resource type in the state

**Kind**: static method of [<code>actions/gnresource</code>](#module_actions/gnresource)  

| Param | Type | Description |
| --- | --- | --- |
| resourceType | <code>object</code> | resource type |

<a name="module_actions/gnresource.resourceError"></a>

### actions/gnresource.resourceError(error)
Set error of resource request

**Kind**: static method of [<code>actions/gnresource</code>](#module_actions/gnresource)  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>object</code> | error data object |

<a name="module_actions/gnresource.updateResourceProperties"></a>

### actions/gnresource.updateResourceProperties(properties)
Update resource properties

**Kind**: static method of [<code>actions/gnresource</code>](#module_actions/gnresource)  

| Param | Type | Description |
| --- | --- | --- |
| properties | <code>object</code> | resource properties to override |

<a name="module_actions/gnresource.setNewResource"></a>

### actions/gnresource.setNewResource()
Set the current resource as new

**Kind**: static method of [<code>actions/gnresource</code>](#module_actions/gnresource)  
<a name="module_actions/gnresource.setResourceId"></a>

### actions/gnresource.setResourceId(id)
Set resource id or primary key

**Kind**: static method of [<code>actions/gnresource</code>](#module_actions/gnresource)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> \| <code>string</code> | resource id or primary key |

<a name="module_actions/gnresource.setResourcePermissions"></a>

### actions/gnresource.setResourcePermissions(permissions)
Set resource permissions

**Kind**: static method of [<code>actions/gnresource</code>](#module_actions/gnresource)  

| Param | Type | Description |
| --- | --- | --- |
| permissions | <code>object</code> | permissions info |
| permissions.canEdit | <code>bool</code> | can edit permission |
| permissions.canView | <code>bool</code> | can view permission |

<a name="module_actions/gnresource.setSelectedDatasetPermissions"></a>

### actions/gnresource.setSelectedDatasetPermissions(permissions)
Set resource permissions

**Kind**: static method of [<code>actions/gnresource</code>](#module_actions/gnresource)  

| Param | Type | Description |
| --- | --- | --- |
| permissions | <code>object</code> | permissions info |
| permissions.canEdit | <code>bool</code> | can edit permission |
| permissions.canView | <code>bool</code> | can view permission |

<a name="module_actions/gnresource.setFavoriteResource"></a>

### actions/gnresource.setFavoriteResource(favorite)
Set the resource favorite field (trigger epic gnSaveFavoriteContent)

**Kind**: static method of [<code>actions/gnresource</code>](#module_actions/gnresource)  

| Param | Type | Description |
| --- | --- | --- |
| favorite | <code>bool</code> | resource data field |

<a name="module_actions/gnresource.enableMapThumbnailViewer"></a>

### actions/gnresource.enableMapThumbnailViewer()
Enable or disable map thumbnail viewer

**Kind**: static method of [<code>actions/gnresource</code>](#module_actions/gnresource)  
<a name="module_actions/gnresource.setMapThumbnail"></a>

### actions/gnresource.setMapThumbnail()
Set map like thumbnail to map or layer (trigger epic gnSaveDirectContent)

**Kind**: static method of [<code>actions/gnresource</code>](#module_actions/gnresource)  
<a name="module_actions/gnsave"></a>

## actions/gnsave
Actions for GeoNode save workflow


* [actions/gnsave](#module_actions/gnsave)
    * [.savingResource()](#module_actions/gnsave.savingResource)
    * [.saveSuccess(success)](#module_actions/gnsave.saveSuccess)
    * [.saveError(error)](#module_actions/gnsave.saveError)
    * [.clearSave()](#module_actions/gnsave.clearSave)
    * [.saveContent(id, metadata, reload, showNotifications)](#module_actions/gnsave.saveContent)
    * [.saveDirectContent()](#module_actions/gnsave.saveDirectContent)

<a name="module_actions/gnsave.savingResource"></a>

### actions/gnsave.savingResource()
Initialize saving loading state

**Kind**: static method of [<code>actions/gnsave</code>](#module_actions/gnsave)  
<a name="module_actions/gnsave.saveSuccess"></a>

### actions/gnsave.saveSuccess(success)
Set success response of save workflow

**Kind**: static method of [<code>actions/gnsave</code>](#module_actions/gnsave)  

| Param | Type | Description |
| --- | --- | --- |
| success | <code>object</code> | success response |

<a name="module_actions/gnsave.saveError"></a>

### actions/gnsave.saveError(error)
Set error response of save workflow

**Kind**: static method of [<code>actions/gnsave</code>](#module_actions/gnsave)  

| Param | Type | Description |
| --- | --- | --- |
| error | <code>object</code> | error response |

<a name="module_actions/gnsave.clearSave"></a>

### actions/gnsave.clearSave()
Clear state of actions.gnsave reducer

**Kind**: static method of [<code>actions/gnsave</code>](#module_actions/gnsave)  
<a name="module_actions/gnsave.saveContent"></a>

### actions/gnsave.saveContent(id, metadata, reload, showNotifications)
Save or create a resource (trigger epic actions.gnsaveContent)

**Kind**: static method of [<code>actions/gnsave</code>](#module_actions/gnsave)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> \| <code>string</code> | resource id or primary key, create a new resource if undefined |
| metadata | <code>object</code> | properties to update { name, description, thumbnail } |
| reload | <code>bool</code> | reload page on create |
| showNotifications | <code>bool</code> | show notifications to user |

<a name="module_actions/gnsave.saveDirectContent"></a>

### actions/gnsave.saveDirectContent()
Save or updates a resource (trigger epic actions.gnsaveDirectContent)

**Kind**: static method of [<code>actions/gnsave</code>](#module_actions/gnsave)  
<a name="module_actions/gnsearch"></a>

## actions/gnsearch
Actions for GeoNode resource featured items
set new Featured Resources includes data, page, links


* [actions/gnsearch](#module_actions/gnsearch)
    * [.loadFeaturedResources(action, pageSize)](#module_actions/gnsearch.loadFeaturedResources)
    * [.reduceTotalCount()](#module_actions/gnsearch.reduceTotalCount)
    * [.increaseTotalCount()](#module_actions/gnsearch.increaseTotalCount)

<a name="module_actions/gnsearch.loadFeaturedResources"></a>

### actions/gnsearch.loadFeaturedResources(action, pageSize)
Actions for GeoNode resource featured items
loads new featured resources basing on the action, previous or next

**Kind**: static method of [<code>actions/gnsearch</code>](#module_actions/gnsearch)  

| Param | Type | Description |
| --- | --- | --- |
| action | <code>string</code> | can be either next or previous |
| pageSize | <code>number</code> | page_size of items to load defaults to 4; |

<a name="module_actions/gnsearch.reduceTotalCount"></a>

### actions/gnsearch.reduceTotalCount()
Reduce total count of resouces after deletion

**Kind**: static method of [<code>actions/gnsearch</code>](#module_actions/gnsearch)  
<a name="module_actions/gnsearch.increaseTotalCount"></a>

### actions/gnsearch.increaseTotalCount()
Increase total count of resouces after deletion

**Kind**: static method of [<code>actions/gnsearch</code>](#module_actions/gnsearch)  
<a name="module_epics/datasetcatalog"></a>

## epics/datasetcatalog
<a name="module_epics/datasetcatalog.gnUpdateDatasetsCatalogMapLayout"></a>

### epics/datasetcatalog.gnUpdateDatasetsCatalogMapLayout
Override the layout to get the correct right offset when the data catalog is open

**Kind**: static constant of [<code>epics/datasetcatalog</code>](#module_epics/datasetcatalog)  
<a name="module_epics/index"></a>

## epics/index

* [epics/index](#module_epics/index)
    * [.gnCheckSelectedDatasetPermissions](#module_epics/index.gnCheckSelectedDatasetPermissions)
    * [.gnSetDatasetsPermissions](#module_epics/index.gnSetDatasetsPermissions)

<a name="module_epics/index.gnCheckSelectedDatasetPermissions"></a>

### epics/index.gnCheckSelectedDatasetPermissions
Handles checking and for permissions of a layer when its selected

**Kind**: static constant of [<code>epics/index</code>](#module_epics/index)  
<a name="module_epics/index.gnSetDatasetsPermissions"></a>

### epics/index.gnSetDatasetsPermissions
Checks the permissions for layers when a map is loaded and when a new layer is added
to a map

**Kind**: static constant of [<code>epics/index</code>](#module_epics/index)  
<a name="module_epics/layersetting"></a>

## epics/layersetting
<a name="module_epics/layersetting.gnUpdateLayerSettingsMapLayout"></a>

### epics/layersetting.gnUpdateLayerSettingsMapLayout
Override the layout to get the correct left offset when the layer settings panel is open

**Kind**: static constant of [<code>epics/layersetting</code>](#module_epics/layersetting)  
<a name="module_epics/visualstyleeditor"></a>

## epics/visualstyleeditor

* [epics/visualstyleeditor](#module_epics/visualstyleeditor)
    * _static_
        * [.gnUpdateVisualStyleEditorMapLayout](#module_epics/visualstyleeditor.gnUpdateVisualStyleEditorMapLayout)
    * _inner_
        * [~getGnStyleQueryParams(style, styleService)](#module_epics/visualstyleeditor..getGnStyleQueryParams) ⇒ <code>Promise</code>

<a name="module_epics/visualstyleeditor.gnUpdateVisualStyleEditorMapLayout"></a>

### epics/visualstyleeditor.gnUpdateVisualStyleEditorMapLayout
Override the layout to get the correct left offset when the visual style editor is open

**Kind**: static constant of [<code>epics/visualstyleeditor</code>](#module_epics/visualstyleeditor)  
<a name="module_epics/visualstyleeditor..getGnStyleQueryParams"></a>

### epics/visualstyleeditor~getGnStyleQueryParams(style, styleService) ⇒ <code>Promise</code>
Get Mapstore style in JSON, editor type and code for layer style in Promise

**Kind**: inner method of [<code>epics/visualstyleeditor</code>](#module_epics/visualstyleeditor)  

| Param | Type | Description |
| --- | --- | --- |
| style | <code>Object</code> | layer default style |
| styleService | <code>Object</code> | Object containing baseUrl for getStylesInfo |

<a name="module_plugins/LayerSettings"></a>

## plugins/LayerSettings
<a name="module_plugins/LayerSettings..LayerSettings"></a>

### plugins/LayerSettings~LayerSettings
Plugin for layer and groups settings

**Kind**: inner property of [<code>plugins/LayerSettings</code>](#module_plugins/LayerSettings)  
**Example**  
```js
{
  "name": "LayerSettings",
}
```
<a name="module_plugins/MediaViewer"></a>

## plugins/MediaViewer
<a name="module_plugins/MediaViewer..MediaViewer"></a>

### plugins/MediaViewer~MediaViewer
Plugin for Media Viewer

**Kind**: inner property of [<code>plugins/MediaViewer</code>](#module_plugins/MediaViewer)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cfg.gltf.environmentFiles | <code>string</code> | path to an hdr environment file for the 3d scene (format gltf) |
| cfg.pcd.environmentFiles | <code>string</code> | path to an hdr environment file for the 3d scene (format pcd) |

<a name="module_plugins/Save"></a>

## plugins/Save
<a name="module_plugins/Save..Save"></a>

### plugins/Save~Save
Plugin for Save modal

**Kind**: inner property of [<code>plugins/Save</code>](#module_plugins/Save)  
<a name="module_plugins/SaveAs"></a>

## plugins/SaveAs
<a name="module_plugins/SaveAs..SaveAs"></a>

### plugins/SaveAs~SaveAs
Plugin for SaveAs modal

**Kind**: inner property of [<code>plugins/SaveAs</code>](#module_plugins/SaveAs)  
<a name="module_plugins/Sync"></a>

## plugins/Sync
<a name="module_selectors/config"></a>

## selectors/config

* [selectors/config](#module_selectors/config)
    * [.getParsedGeoNodeConfiguration](#module_selectors/config.getParsedGeoNodeConfiguration)
    * [.getCustomMenuFilters](#module_selectors/config.getCustomMenuFilters)

<a name="module_selectors/config.getParsedGeoNodeConfiguration"></a>

### selectors/config.getParsedGeoNodeConfiguration
get the parsed geonode configuration that take into account
user permissions and expressions

**Kind**: static constant of [<code>selectors/config</code>](#module_selectors/config)  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>object</code> | redux state |

<a name="module_selectors/config.getCustomMenuFilters"></a>

### selectors/config.getCustomMenuFilters
return all the custom filters available in the GeoNode configuration from localConfig

**Kind**: static constant of [<code>selectors/config</code>](#module_selectors/config)  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>object</code> | redux state |

<a name="module_utils/APIUtils"></a>

## utils/APIUtils
Utilities for api requests

<a name="module_utils/APIUtils.parseDevHostname"></a>

### utils/APIUtils.parseDevHostname ⇒ <code>string</code>
In development mode it returns the request with a relative path
if the request url contain localhost:8000

**Kind**: static constant of [<code>utils/APIUtils</code>](#module_utils/APIUtils)  
**Returns**: <code>string</code> - correct url for localhost  

| Param | Type | Description |
| --- | --- | --- |
| requestUrl | <code>string</code> | request url |

<a name="module_utils/CoordinatesUtils"></a>

## utils/CoordinatesUtils
Utilities for api requests


* [utils/CoordinatesUtils](#module_utils/CoordinatesUtils)
    * [.boundsToExtentString](#module_utils/CoordinatesUtils.boundsToExtentString) ⇒ <code>string</code>
    * [.getExtent](#module_utils/CoordinatesUtils.getExtent) ⇒ <code>Array</code>

<a name="module_utils/CoordinatesUtils.boundsToExtentString"></a>

### utils/CoordinatesUtils.boundsToExtentString ⇒ <code>string</code>
Given a bounds { minx, miny, maxx, maxy } and a crs return the extent param as string

**Kind**: static constant of [<code>utils/CoordinatesUtils</code>](#module_utils/CoordinatesUtils)  
**Returns**: <code>string</code> - extent param  
<a name="module_utils/CoordinatesUtils.getExtent"></a>

### utils/CoordinatesUtils.getExtent ⇒ <code>Array</code>
Get the extent of area of interest from map bbox
the values of the extent are expressed in the unit of the projection

**Kind**: static constant of [<code>utils/CoordinatesUtils</code>](#module_utils/CoordinatesUtils)  
**Returns**: <code>Array</code> - containng minx, miny, maxx, maxy
minx, miny -> bottom-left corner of square
maxx, maxy -> top-right corner of square  

| Param | Type | Description |
| --- | --- | --- |
| Options | <code>Object</code> | containing layers and features |

<a name="module_utils/FileUtils"></a>

## utils/FileUtils

* [utils/FileUtils](#module_utils/FileUtils)
    * [.getFileFromDownload](#module_utils/FileUtils.getFileFromDownload) ⇒ <code>string</code>
    * [.determineResourceType](#module_utils/FileUtils.determineResourceType) ⇒ <code>string</code>

<a name="module_utils/FileUtils.getFileFromDownload"></a>

### utils/FileUtils.getFileFromDownload ⇒ <code>string</code>
Generates a blob path for a resource

**Kind**: static constant of [<code>utils/FileUtils</code>](#module_utils/FileUtils)  
**Returns**: <code>string</code> - Object url to view resource in browser  

| Param | Type | Description |
| --- | --- | --- |
| downloadURL | <code>string</code> | remote path to a resource |
| type | <code>string</code> | type of the file to be converted to default application/json |

<a name="module_utils/FileUtils.determineResourceType"></a>

### utils/FileUtils.determineResourceType ⇒ <code>string</code>
check if a resource extension is supported for display in the media viewer

**Kind**: static constant of [<code>utils/FileUtils</code>](#module_utils/FileUtils)  
**Returns**: <code>string</code> - pdf image video unsupported  

| Param | Type | Description |
| --- | --- | --- |
| extension | <code>string</code> | extension of the resource accessed on resource.extenstion |

<a name="module_utils/MenuUtils"></a>

## utils/MenuUtils
<a name="module_utils/MenuUtils.hasPermissionsTo"></a>

### utils/MenuUtils.hasPermissionsTo(perms, objResource, objType) ⇒ <code>boolean</code>
check if the menu perms is allowed by user or resource

**Kind**: static method of [<code>utils/MenuUtils</code>](#module_utils/MenuUtils)  

| Param | Type | Description |
| --- | --- | --- |
| perms | <code>array</code> | array with perms of user or resource |
| objResource | <code>array</code> | menu or resource perms |
| objType | <code>string</code> | type of objcet (user / resource) |

<a name="module_utils/ResourceUtils"></a>

## utils/ResourceUtils

* [utils/ResourceUtils](#module_utils/ResourceUtils)
    * [.resourceToLayerConfig](#module_utils/ResourceUtils.resourceToLayerConfig) ⇒ <code>object</code>
    * [.setAvailableResourceTypes](#module_utils/ResourceUtils.setAvailableResourceTypes)
    * [.getResourcePermissions](#module_utils/ResourceUtils.getResourcePermissions) ⇒
    * [.parseDocumentConfig](#module_utils/ResourceUtils.parseDocumentConfig) ⇒ <code>Object</code>
    * [.parseMapConfig](#module_utils/ResourceUtils.parseMapConfig) ⇒ <code>Object</code>
    * [.canCopyResource](#module_utils/ResourceUtils.canCopyResource)

<a name="module_utils/ResourceUtils.resourceToLayerConfig"></a>

### utils/ResourceUtils.resourceToLayerConfig ⇒ <code>object</code>
convert resource layer configuration to a mapstore layer object

**Kind**: static constant of [<code>utils/ResourceUtils</code>](#module_utils/ResourceUtils)  

| Param | Type | Description |
| --- | --- | --- |
| resource | <code>object</code> | geonode layer resource |

<a name="module_utils/ResourceUtils.setAvailableResourceTypes"></a>

### utils/ResourceUtils.setAvailableResourceTypes
A setter funtion to assign a value to availableResourceTypes

**Kind**: static constant of [<code>utils/ResourceUtils</code>](#module_utils/ResourceUtils)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | Value to be assign to availableResourceTypes (gotten from resource_types response payload) |

<a name="module_utils/ResourceUtils.getResourcePermissions"></a>

### utils/ResourceUtils.getResourcePermissions ⇒
Extracts lists of permissions into an object for use in the Share plugin select elements

**Kind**: static constant of [<code>utils/ResourceUtils</code>](#module_utils/ResourceUtils)  
**Returns**: An object containing permissions for each type of user/group  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Permission Object to extract permissions from |

<a name="module_utils/ResourceUtils.parseDocumentConfig"></a>

### utils/ResourceUtils.parseDocumentConfig ⇒ <code>Object</code>
Parse document response object (for image and video)

**Kind**: static constant of [<code>utils/ResourceUtils</code>](#module_utils/ResourceUtils)  
**Returns**: <code>Object</code> - new document config object  

| Param | Type | Description |
| --- | --- | --- |
| docResponse | <code>Object</code> | api response object |
| resource | <code>Object</code> | optional resource object |

<a name="module_utils/ResourceUtils.parseMapConfig"></a>

### utils/ResourceUtils.parseMapConfig ⇒ <code>Object</code>
Parse map response object

**Kind**: static constant of [<code>utils/ResourceUtils</code>](#module_utils/ResourceUtils)  
**Returns**: <code>Object</code> - new map config object  

| Param | Type | Description |
| --- | --- | --- |
| mapResponse | <code>Object</code> | api response object |
| resource | <code>Object</code> | optional resource object |

<a name="module_utils/ResourceUtils.canCopyResource"></a>

### utils/ResourceUtils.canCopyResource
Util to check if resosurce can be cloned (Save As)
Requirements for copying are 'add_resource' permission and is_copyable property on resource

**Kind**: static constant of [<code>utils/ResourceUtils</code>](#module_utils/ResourceUtils)  
<a name="DOWNLOAD_METADATA"></a>

## DOWNLOAD\_METADATA
Sync geostory components with their live resources on geonode

**Kind**: global constant  
<a name="SYNC_RESOURCES"></a>

## SYNC\_RESOURCES
Sync geostory components with their live resources on geonode

**Kind**: global constant  
<a name="gnSyncComponentsWithResources"></a>

## gnSyncComponentsWithResources ⇒ <code>Observable</code>
Sync reources in current geostory or dashboard with their respective sources

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| action$ | <code>\*</code> | the actions |
| store | <code>Object</code> |  |

<a name="getGeonodeResourceDataFromGeostory"></a>

## getGeonodeResourceDataFromGeostory ⇒ <code>Array</code>
Get geonode resources from within a Geostory

**Kind**: global constant  
**Returns**: <code>Array</code> - Array of geonode resources  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>Object</code> | App state |

<a name="getSyncInfo"></a>

## getSyncInfo(appType, resourceData, successArr) ⇒ <code>Object</code>
Get resource type and data for state update in sync process

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| appType | <code>String</code> | geostory or dashboard |
| resourceData | <code>Object</code> | Resource Object |
| successArr | <code>Array</code> | Array of success responses only used in case of dashboard |

<a name="getNotificationInfo"></a>

## getNotificationInfo(errors, successes) ⇒ <code>Object</code>
Get notification title, leve, and message for showNotification

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| errors | <code>Number</code> | length of errors array |
| successes | <code>Number</code> | length of success arra |


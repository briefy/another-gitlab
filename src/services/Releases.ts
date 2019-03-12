import { BaseService, RequestHelper } from '../infrastructure';

export interface Assets {
  name?: string;
  url?: string;
}
export interface Options {
  id: string | number;
  name: string;
  tag_name?: string;
  description?: string;
  ref?: string;
  assets?: Assets[];
}
export default class Releases extends BaseService {
  all(projectId: ProjectId) {
    const pId = encodeURIComponent(projectId);
    return RequestHelper.get(this, `/projects/${pId}/releases`);
  }

  byTagName(projectId: ProjectId, tagName: string) {
    const pId = encodeURIComponent(projectId);
    return RequestHelper.get(this, `/projects/${pId}/releases/${tagName}`);
  }

  create(projectId: ProjectId, options: Options) {
    const pId = encodeURIComponent(projectId);
    return RequestHelper.post(this, `/projects/${pId}/releases`, options as any);
  }

  edit(projectId: ProjectId, options: Options) {
    const pId = encodeURIComponent(projectId);
    return RequestHelper.put(this, `/projects/${pId}/releases`, options as any);
  }

  remove(projectId: ProjectId) {
    const pId = encodeURIComponent(projectId);
    return RequestHelper.delete(this, `/projects/${pId}/releases`);
  }
}

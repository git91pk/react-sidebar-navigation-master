import React from "react";
import { useState } from "react";
import TextField from "../../Ui/TextField";
import "../../index.css";

const Tagcreate = () => {
  const defaultValues = { names: "", email: "", phone: "" };
  const [values, setValues] = useState(defaultValues);
  const { name, email, phone } = values;

  return (
    <div className="w-2/3" style={{ marginLeft: "30%", width: "75vw" }}>
      <form className="my-20 mx-20 naveen shadow-md rounded px-6 pt-6 pb-4 mb-2 text-white">
        <span className="font-bold">Tag Sync Details</span>
        <div className="my-8 shadow naveen">
          <h4 className="my-4 text-base font-medium text-white">
            <span className="text-sm font-semibold">Parent ORG Details</span>
          </h4>
          <div className="flex items-center">
            <div className="flex my-2 text-sm">
              <TextField
                label="Parent Org"
                placeholder="Magento comops"
                onChange={(val) =>
                  setValues((prev) => ({
                    ...prev,
                    name,
                  }))
                }
                value={name}
              />
              <TextField
                label="Parent Repo"
                placeholder="MGS-Sync-Parent"
                onChange={(val) =>
                  setValues((prev) => ({
                    ...prev,
                    name,
                  }))
                }
                value={name}
              />
              <TextField
                label="Parent Tag"
                placeholder="0.0.9"
                onChange={(val) =>
                  setValues((prev) => ({
                    ...prev,
                    name,
                  }))
                }
                value={name}
              />
            </div>
          </div>

          <div className="my-8">
            <h4 className="my-4 text-base font-medium text-white">
              <span className="text-sm font-semibold text-white">
                Child ORG Details
              </span>
            </h4>
            <div className="flex items-center">
              <div className="flex my-2 text-sm">
                <TextField
                  label="Child Org"
                  placeholder="Magento cicd"
                  onChange={(val) =>
                    setValues((prev) => ({
                      ...prev,
                      name,
                    }))
                  }
                  value={name}
                />
                <TextField
                  label="Child Repo"
                  placeholder="MGS Sync Parent"
                  onChange={(val) =>
                    setValues((prev) => ({
                      ...prev,
                      name,
                    }))
                  }
                  value={name}
                />
              </div>
            </div>
          </div>

          <div className="my-8">
            <div className="flex items-center">
              <div className="flex my-2">
                <button className="btn-naveen">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Tagcreate;
